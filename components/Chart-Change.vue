<template>
  <div ref="vis" class="graphic">
    <h3>{{ type }}</h3>
    <svg
      class="vis"
      :width="width + 'px'"
      :height="height + 'px'"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <g>
        <g v-for="({ x1, x2, y, tick }, i) in ticks">
          <line :x1="x1" :x2="x2" :y1="y" :y2="y" class="tick" />
          <text v-if="i === 0 || i === ticks.length - 1" :x="x1 - 5" :y="y" text-anchor="end" dominant-baseline="middle" class="tick">{{ tick }}</text>
        </g>
      </g>
      <g v-for="({ x1, x2, y1, y2, country, v1, v2 }) in elements">
        <text :x="x1 - 5" :y="y1" text-anchor="end" dominant-baseline="middle" class="label label--base" ref="labelLeftBase"><tspan>{{ country }}:</tspan><tspan> {{ v1 }}</tspan></text>
        <text :x="x1 - 5" :y="y1" text-anchor="end" dominant-baseline="middle" class="label" ref="labelLeft" transform="translate(0, 0)"><tspan>{{ country }}:</tspan><tspan> {{ v1 }}</tspan></text>
        <text :x="x2 + 5" :y="y2" text-anchor="start" dominant-baseline="middle" class="label">{{ v2 }}</text>
        <!-- <circle :cx="x1" :cy="y1" r="2" />
        <circle :cx="x2" :cy="y2" r="2" /> -->
        <line :x1="x1" :x2="x2" :y1="y1" :y2="y2" class="change" />
      </g>
    </svg>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { scalePoint, scaleDiverging, scaleLinear } from 'd3-scale'
import { interpolatePiYG } from 'd3-scale-chromatic'
import { isUndefined, map, range, last, forEach, get, round } from 'lodash'
import { extent } from 'd3-array'
import { timer } from 'd3-timer'
import { format } from 'd3-format'
import { interpolateNumber } from 'd3-interpolate'

const f = format('.1f')

function getTranslateY (el) {
  const transform = el.getAttribute('transform')
  if (transform === null) { return 0 }
  return parseFloat(transform.match(/translate.*\((.+)\)/)[1].split(',')[1])
}

function placeLabels (labels) {
  let move = 1
  let count = 0
  // console.log('placeLabels')
  resetLabels(labels)
  while (move > 0 && count < 100) {
    move = 0
    count += 1
    forEach(labels, l1 => {
      const { top: top1, height: height1, bottom: bottom1 } = l1.getBoundingClientRect()
      forEach(labels, l2 => {
        if (l1 !== l2) {
          const { top: top2, height: height2, bottom: bottom2 } = l2.getBoundingClientRect()
          if ((Math.abs(top1 - top2) * 2 < (height1 + height2))) {
            const dy = ((Math.max(0, bottom1 - top2) + Math.min(0, top1 - bottom2))) * 0.1
            move += Math.abs(dy)
            l1.setAttribute('transform', `translate(0, ${getTranslateY(l1) + dy})`)
            l2.setAttribute('transform', `translate(0, ${getTranslateY(l2) - dy})`)
            // console.log(dy, l1.textContent, l2.textContent)
            // if (dy < 0) {
            //   l1.setAttribute('transform', `translate(0, ${getTranslateY(l1) + dy})`)
            //   l2.setAttribute('transform', `translate(0, ${getTranslateY(l2) - dy})`)
            // } else {
            //   l1.setAttribute('transform', `translate(0, ${getTranslateY(l1) - dy})`)
            //   l2.setAttribute('transform', `translate(0, ${getTranslateY(l2) + dy})`)
            // }
          }
        }
      })
    })
  }
}

function resetLabels (labels) {
  forEach(labels, label => {
    label.setAttribute('transform', `translate(0, 0)`)
  })
}

export default {
  props: ['type'],
  data () {
    return {
      s: 1,
      width: 0,
      height: 0,
      margin: {
        left: 100,
        right: 20,
        top: 0,
        bottom: 10
      }
    }
  },
  computed: {
    ...mapState('driver', [
      'changes',
      'rcp'
    ]),
    scaleX () {
      return scalePoint()
        .range([this.margin.left, this.width - this.margin.right])
        .domain([0, 1])
    },
    xs () {
      return [this.scaleX(0), this.scaleX(1)]
    },
    extentY() {
      const values = []
      forEach(this.changes, type => {
        forEach(type, country => {
          forEach(country, rcp => {
            values.push(...rcp)
          })
        })
      })
      return extent(values)
    },
    scaleY () {
      return scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain(this.extentY).nice()
    },
    labelDriver () {
      return {
        x: this.scaleX(1),
        y: this.scaleY(3),
        label: `${this.drivers[5] ? 'activated' : 'deactivated'} driver`
      }
    },
    elements () {
      return map(get(this.changes, this.type, {}), (values, country) => {
        // const v1 = get(values, [this.rcp, 0], 0)
        const v1_26 = get(values, ['2.6', 0], 0)
        const v1_60 = get(values, ['6.0', 0], 0)
        // const v2 = get(values, [this.rcp, 1], 0)
        const v2_26 = get(values, ['2.6', 1], 0)
        const v2_60 = get(values, ['6.0', 1], 0)

        const v1 = interpolateNumber(v1_60, v1_26)(this.s)
        const v2 = interpolateNumber(v2_60, v2_26)(this.s)

        const y1 = this.scaleY(v1)
        const y2 = this.scaleY(v2)

        const [x1, x2] = this.xs

        return {
          x1, x2, y1, y2, country,
          v1: f(v1),
          v2: f(v2)
        }
      })
    },
    ticks () {
      return map(this.scaleY.ticks(4), tick => {
        const [x1, x2] = this.xs
        return {
          x1: x1 - 10,
          x2: x2 + 10,
          y: this.scaleY(tick),
          tick
        }
      })
    }
  },
  mounted () {
    this.calcSizes()
    window.addEventListener('resize', this.calcSizes, false)
  },
  updated () {
    this.calcSizes()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcSizes, false)
  },
  methods: {
    ...mapActions('driver', [
      'hoverDriver',
      'toggleDriver'
    ]),
    calcSizes () {
      const { vis: el } = this.$refs
      if (!isUndefined(el)) {
        const width = el.clientWidth || el.parentNode.clientWidth
        const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = height
        placeLabels(this.$refs.labelLeft)
        placeLabels(this.$refs.labelLeftBase)
      }
    },
    correctLabelPosition () {
      placeLabels(this.$refs.labelLeft)
      placeLabels(this.$refs.labelLeftBase)
    }
  },
  watch: {
    rcp (o, n) {
      resetLabels(this.$refs.labelLeft)
      resetLabels(this.$refs.labelLeftBase)

      const t = timer((elapsed) => {
        if (elapsed >= 500) {
          t.stop()
          this.correctLabelPosition();
        }
        const progress = elapsed / 500
        this.s = n === '2.6' ? 1 - progress : progress
        // console.log(progress, elapsed);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  h3 {
    text-align: center;
  }

  .change {
    stroke: $color-neon;
    stroke-width: 2px;
  }

  line.tick {
    @include graphic-line-tick();
  }

  text.tick {
    @include graphic-text-tick();
  }

  .values {
    font-size: 0.8rem;
  }

  .vis-container {
    position: relative;
  }

  .vis-container, svg {
    width: 100%;
    height: 400px;
  }

  text.label {
    fill: $color-dark-gray;
    // transition: transform 0.2s;

    tspan:first-child {
      fill: #222;
    }

    &.label--base {
      fill: #fff;
      stroke: #fff;
      stroke-width: 3px;
    }
    // font-style: italic;
  }

  line.label {
    stroke: $color-light-gray;
  }

  circle {
    fill: $color-yellow;
    // stroke: black;
  }

  path {
    fill: none;
    stroke-width: 1.5px;
    // opacity: 0.3;
  }

  @-webkit-keyframes flash {
    0% {
      color: $color-neon;
    }
    100% {
      color: $color-black;
    }
  }

</style>
