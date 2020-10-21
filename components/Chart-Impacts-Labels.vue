<template>
  <g :transform="'translate(' + center + ',' + center + ')'">
    <defs>
      <path
        id="pathTop"
        :d="pathTop" />
    </defs>
    <defs>
      <path
        id="pathBottom"
        :d="pathBottom" />
    </defs>
    <g v-for="({ label, deg, path }, n) in labels">
      <text class="sector caption">
        <textPath :xlink:href="`#path${path}`" alignment-baseline="middle" dominant-baseline="middle" text-anchor="middle" :startOffset="`${deg}%`">
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
    data: function () {
      return {
        labels: [{
          label: 'Extended SSP 3: Regional rivalry',
          deg: 25,
          path: 'Top'
        }, {
          label: 'Extended SSP 5: Fossil-fuelled development',
          deg: 75,
          path: 'Top'
        }, {
          label: 'Extended SSP 4: Inequality',
          deg: 25,
          path: 'Bottom'
        }, {
          label: 'Extended SSP 1: Sustainability',
          deg: 75,
          path: 'Bottom'
        }]
      }
    },
    computed: {
      pathTop () {
        const { radius } = this
        return [
          `M ${-radius} ${0}`,
          `A ${radius} ${radius} 1 0 1 ${radius} ${0}`
        ].join(' ')
      },
      pathBottom () {
        const { radius } = this
        return [
          `M ${-radius} ${0}`,
          `A ${radius} ${radius} 0 1 0 ${radius} ${0}`
        ].join(' ')
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/global";

</style>
