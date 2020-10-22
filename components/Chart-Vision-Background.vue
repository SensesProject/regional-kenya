<template>
  <g :transform="'translate(' + center + ',' + center + ')'" class="background">
    <g v-for="({ r, path, label, tooltip }, n) in areas" class="areas">
      <circle
        cx="0"
        cy="0"
        v-tooltip="{ content: tooltip }"
        :class="{ ['area-' + (n + 1)]: true }"
        :r="radius * r" />
    </g>
    <line
      v-for="deg in [0, 90, 180, 270]"
      :x1="radius"
      :x2="0"
      :y1="0"
      :y2="0"
      :transform="`rotate(${deg})`"
      :style="{ 'transform-origin': `${0}px ${0}px` }" />
    <g v-for="({ r, path, label }, n) in areas">
      <defs v-if="label">
        <path
          :id="'textPath' + n"
          class="base"
          :d="path" />
      </defs>
      <text class="areaLabels" v-if="label">
        <textPath :xlink:href="'#textPath' + n" alignment-baseline="hanging" text-anchor="middle" startOffset="50%">
          {{ label }}
        </textPath>
      </text>
    </g>
  </g>
</template>

<script>
  import { mapState } from 'vuex'
  import { map } from 'lodash'

  export default {
    props: {
      radius: {
        type: Number
      },
      center: {
        type: Number
      }
    },
    data () {
      return {
        data: [{
          'r': 1,
          'label': 'People',
          tooltip: 'People pathways which involves the movement of people between countries, like migration and tourism.'
        }, {
          'r': 0.80,
          'label': 'Biophysical',
          tooltip: 'Biophysical pathway which encompasses transboundary ecosystems, such as river basins.'
        }, {
          'r': 0.60,
          'label': 'Trade',
          tooltip: 'Trade pathway which transmits climate risks across international supply chains.'
        }, {
          'r': 0.40,
          'label': 'Finance',
          tooltip: 'Finance pathway which represents capital flows and climate impacts on assets held overseas.'
        }, {
          'r': 0.20
        }]
      }
    },
    computed: {
      areas () {
        return map(this.data, area => {
          const { radius } = this
          const radi = radius * area.r - 30
          const start = { x: -radi, y: 0 }
          const end = { x: radi, y: 0 }
          const path = [
            `M ${start.x} ${start.y}`,
            `A ${radi} ${radi} 1 0 1 ${end.x} ${end.y}`
          ].join(' ')

          return {
            ...area,
            path: path
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  $stroke: 5px;

  .areas {
    stroke-opacity: 1;
    fill: #fafafa;
    stroke-width: $stroke;
    stroke: $color-white;
  }

  .area-5 {
    fill: $color-white;
  }

  path.base {
    fill: none;
  }

  line {
    stroke: $color-white;
    stroke-width: $stroke;
  }

  .areaLabels {
    fill: #d8d8d8;
    pointer-events: none;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

</style>
