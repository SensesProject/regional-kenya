<template>
  <figure ref="vis" class="vis-container graphic layout--right-wide">
    <svg
      class="vis"
      :width="width + 'px'"
      :height="height + 'px'"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <ChartVisionBackground :center="width / 2" :radius="radius" />
      <ChartImpactsLabels :center="width / 2" :radius="radius + 10" />

      <g>
        <text :x="width / 2" :y="20" text-anchor="middle" class="rcp">Medium/high-end climate change (RCP 6.0)</text>
        <text :x="width / 2" :y="height - 20" text-anchor="middle" class="rcp" alignment-baseline="hanging" dominant-baseline="hanging">Low-end climate change (RCP2.6)</text>
        <text :x="20" :y="height / 2" :transform="`rotate(-90, ${20}, ${height / 2})`" text-anchor="middle" class="col">Low-level regional collaboration</text>
        <text :x="width - 20" :y="height / 2" :transform="`rotate(90, ${width - 20}, ${height / 2})`" text-anchor="middle" class="col">High-level regional collaboration</text>
      </g>

      <g>
        <Point :x="x" :y="y" :label="label" :key="key" v-for="{ x, y, key, label, color, angle } in points" :color="color" :data-test="angle" />
      </g>
    </svg>
    <figcaption class="cap figcaption">Figure 5. Future cross-border climate impacts for Kenya across four transmission pathways and four scenarios</figcaption>
  </figure>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear, scalePoint } from 'd3-scale'
import { isUndefined, map, forEach } from 'lodash'
import ChartVisionBackground from '~/components/Chart-Vision-Background'
import ChartImpactsLabels from '~/components/Chart-Impacts-Labels'
import Point from '~/components/Helper/Point'

function getCoordinatesForPercent (percent) {
  const x = Math.cos(2 * Math.PI * percent)
  const y = Math.sin(2 * Math.PI * percent)
  return [x, y]
}

const scalePercent = scaleLinear()
  .range([0, 1])
  .domain([0, 360])

export default {
  components: {
    ChartVisionBackground,
    ChartImpactsLabels,
    Point
  },
  data () {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 20,
        right: 20,
        top: 60,
        bottom: 20
      }
    }
  },
  computed: {
    radius () {
      return Math.max((this.height - this.margin.top) / 2 - 20, 0)
    },
    x1 () {
      return this.radius / 5 * 1.5
    },
    x2 () {
      return this.radius / 5 * 4.5
    },
    ...mapState('vision', [
      'visions'
    ]),
    scaleScope () {
      return scalePoint()
        .range([this.x1, this.x2])
        .domain([1, 2, 3, 4])
    },
    scaleX () {
      return scaleLinear()
        .range([this.margin.left, this.width - this.margin.right])
        .domain([0, 9])
    },
    points () {
      const points = []
      forEach(this.visions, ([coords, title, text]) => {
        for (let i = 0; i < coords.length; i += 2) {
          const scope = coords[i]
          const r = this.scaleScope(scope)

          const angle = coords[i + 1] - 90
          const percent = scalePercent(angle)

          const [_x, _y] = getCoordinatesForPercent(percent)
          const x = (this.width / 2) + _x * r
          const y = (this.height / 2) + _y * r

          const tooltip = `<h5>${title}</h5><p>${text}</p>`

          let color

          if (angle < 0) { // SSP 5
            color = 'violet'
          } else if (angle < 90) { // SSP 1
            color = 'green'
          } else if (angle < 180) { // SSP 4
            color = 'yellow'
          } else if (angle < 270) { // SSP 3
            color = 'red'
          }

          points.push({
            x,
            y,
            key: `${title}-${i}`,
            label: tooltip,
            color,
            angle
          })
        }
      })

      return points
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
        // const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = width
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .vis-container, svg {
    width: 100%;
  }

  .rcp, .col {
    @include headline-graphic();
    // transform-box: fill-box;
    // transform-box: view-box;
  }

</style>
