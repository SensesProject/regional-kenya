<template>
  <div ref="vis" class="vis-container">
    <svg
      class="vis"
      :width="width + 'px'"
      :height="height + 'px'"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path v-for="path in paths2" :d="path" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { scaleLinear } from 'd3-scale'
// import TWEEN from '@tweenjs/tween.js'
import { isUndefined, map, range, flatten, values as getValues } from 'lodash'

const STEPS = 10

export default {
  data () {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      },
      tweened: []
    }
  },
  computed: {
    ...mapGetters('driver', [
      'values'
    ]),
    scaleX () {
      return scaleLinear()
        .range([this.margin.left, this.width - this.margin.right])
        .domain([0, STEPS - 1])
    },
    scaleY () {
      return scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain([-1, 1]).nice()
    },
    xs () {
      return map(range(STEPS), i => this.scaleX(i))
    },
    valueObj () {
      const obj = {};
      const values = flatten(this.values)
      for (let i = 0; i < values.length; i++) {
        obj[i] = values[i]
      }
      return obj
    },
    paths2 () {
      console.log(getValues(this.valueObj))
      const values = getValues(this.valueObj)
      const paths = []
      let line = []
      for (let i = 0; i < values.length; i++) {
        const x = i % STEPS
        line.push([this.xs[x], this.scaleY(values[i])])
        if (x === STEPS - 1) {
          paths.push(`M ${line.join('L')}`)
          line = []
        }
      }
      return paths
    },
    paths () {
      console.log(this.valueObj)
      console.log(this.paths2)
      return map(this.values, (line) => {
        const coords = map(line, (y, x) => {
          return [this.xs[x], this.scaleY(y)]
        })
        return `M ${coords.join('L')}`
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
    calcSizes () {
      const { vis: el } = this.$refs
      if (!isUndefined(el)) {
        const width = el.clientWidth || el.parentNode.clientWidth
        const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = height
      }
    },
    tween (startValue, endValue) {
      const vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 100)
        .onUpdate(({ tweeningValue }) => {
          vm.tweenedXPosition = tweeningValue
        })
        .start()

      animate()
    }
  },
  watch: {
    valueObj (newPos, oldPos) {
      this.tween(oldPos, newPos)
    }
  },
  mounted () {
    this.tweenedXPosition = this.valueObj
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .values {
    font-size: 0.8rem;
  }

  .vis-container, svg {
    width: 100%;
    height: 500px;
  }

  path {
    stroke: #000;
    fill: none;
    transition: d 0.3s;
  }

</style>
