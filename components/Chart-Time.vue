<template>
  <div class="graphic graphic--time">
    <header>
      <slot name="header"></slot>
    </header>
    <figure>
      <svg
        ref="vis"
        class="vis"
        :width="width + 'px'"
        :height="height + 'px'"
        :viewBox="`0 0 ${width} ${height}`"
      >
        <g>
          <g v-for="({ x1, x2, y, tick }) in ticksY">
            <line :x1="0" :x2="width" :y1="y" :y2="y" class="tick" />
            <text :x="0" :y="y - 2" class="tick">{{ tick }}</text>
          </g>
          <g v-for="({ y1, y2, x, tick }) in ticksX">
            <line :x1="x" :x2="x" :y1="y1" :y2="y2" class="tick" />
            <text :x="x" :y="y2 + 4" class="tick" text-anchor="middle" dominant-baseline="hanging">{{ tick }}</text>
          </g>
        </g>
        <g>
          <g v-for="({ d, x, y, ssp }) in elements">
            <path :d="d" />
          </g>
          <g v-for="({ d, x, y, isActive, ssp, value }) in elements">
            <path :d="d" class="shadow" v-if="isActive" />
            <path :d="d" :class="[{ isActive }, ssp]" v-if="isActive" />
            <text v-if="isActive" :x="x + 5" :y="y" dominant-baseline="middle" class="label"><tspan>{{ ssp }}:</tspan><tspan> {{ value }}</tspan></text>
          </g>
        </g>
      </svg>
    </figure>
    <footer><slot name="footer"></slot></footer>
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
import ChartDriver from '~/components/Chart-Driver2'

const f = format('.1f')

export default {
  components: {
    ChartDriver
  },
  props: ['type'],
  data () {
    return {
      s: 1,
      width: 0,
      height: 0,
      margin: {
        left: 40,
        right: 80,
        top: 30,
        bottom: 30
      }
    }
  },
  computed: {
    ...mapState('time', [
      'data',
      'ssp'
    ]),
    datum () {
      return get(this.data, this.type, [])
    },
    domainX () {
      const lengths = []
      forEach(this.datum, ssp => {
        lengths.push(ssp.length)
      })
      return range(Math.max(...lengths))
    },
    scaleX () {
      return scalePoint()
        .range([this.margin.left, this.width - this.margin.right])
        .domain(this.domainX)
    },
    xs () {
      return map(this.domainX, value => this.scaleX(value))
    },
    domainY() {
      const values = []
      forEach(this.datum, ssp => {
        values.push(...ssp)
      })
      return [0, Math.max(...values)]
    },
    scaleY () {
      return scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain(this.domainY).nice()
    },
    elements () {
      return map(this.datum, (values, ssp) => {
        const coords = map(values, (value, i) => {
          return [get(this.xs, i, 0), this.scaleY(value)]
        })

        const [x, y] = last(coords)
        const value = round(last(values))

        const path = `M ${coords.map(c => c.join(' ')).join('L')}`

        return {
          isActive: this.ssp === ssp,
          d: path,
          x,
          y,
          ssp,
          value
        }
      })
    },
    ticksY () {
      return map(this.scaleY.ticks(5), tick => {
        const [x1, x2] = this.xs
        return {
          x1: x1 - 10,
          x2: x2 + 10,
          y: this.scaleY(tick),
          tick
        }
      })
    },
    ticksX () {
      return map([0, 6, 12, 18], tick => {
        const [x1, x2] = this.xs
        return {
          y1: this.height - this.margin.bottom,
          y2: this.height - this.margin.bottom + 10,
          x: this.scaleX(tick),
          tick: (tick * 5) + 2010
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic--time {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .vis {
    height: auto;
  }

  line.tick {
    stroke: getColor(gray, 90);
    stroke-width: 1px;
  }

  text.tick {
    font-size: 0.6rem;
    fill: $color-light-gray;
  }

  text.label {
    fill: $color-dark-gray;

    tspan:first-child {
      fill: #222;
    }
  }

  path {
    stroke: getColor(gray, 50);

    &.isActive {
      stroke-width: 2px;

      &.SSP1 {
        stroke: $color-green;
      }

      &.SSP3 {
        stroke: $color-red;
      }

      &.SSP4 {
        stroke: $color-yellow;
      }

      &.SSP5 {
        stroke: $color-violet;
      }
    }

    &.shadow {
      stroke-width: 4px;
      stroke: #fff;
    }
  }

  footer {
    font-size: 0.8rem;
    color: #5e5e64;
    font-style: italic;
  }

</style>
