<template>
  <td @mouseover="onOver" @mouseleave="onLeave" :class="[{ isActive: essp === ssp && essp }, `cell-${ssp}`]"><slot /></td>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['ssp'],
  computed: {
    ...mapState('table', [
      'essp'
    ])
  },
  methods: {
    ...mapActions('table', [
      'setESSP'
    ]),
    onOver () {
      this.setESSP(this.ssp)
    },
    onLeave () {
      this.setESSP(false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  td {
    &.isActive {
      color: #fff;

      &.cell-1 {
        background-color: $color-green;
        border-bottom-color: rgba(getColor(green, 40), 0.5);
      }

      &.cell-3 {
        background-color: $color-red;
        border-bottom-color: rgba(getColor(red, 40), 0.5);
      }

      &.cell-4 {
        background-color: $color-yellow;
        border-bottom-color: rgba(getColor(yellow, 40), 0.5);
      }

      &.cell-5 {
        background-color: $color-violet;
        border-bottom-color: rgba(getColor(violet, 20), 0.5);
      }
    }
  }

</style>
