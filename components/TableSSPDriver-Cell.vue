<template>
  <td @mouseover="onOver" @mouseleave="onLeave" :class="{ isActive: essp === ssp && essp }"><slot /></td>
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
      background-color: $color-neon;
      color: #fff;
      border-bottom-color: rgba(getColor(neon, 40), 0.5);
    }
  }

</style>
