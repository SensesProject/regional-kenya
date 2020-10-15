<template>
  <div @click="toggleRCP" class="button-wrapper">
    <span :class="{ isActive: rcp === '2.6' }">RCP 2.6</span>
    <svg class="switch">
      <rect x="1" y="1" width="26" height="14" rx="7" ry="7" />
      <circle cy="8" cx="8" :class="{ isRight: rcp === '6.0' }" r="5" />
    </svg>
    <span :class="{ isActive: rcp === '6.0' }">RCP 6.0</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('driver', [
      'rcp'
    ])
  },
  methods: {
    ...mapActions('driver', [
      'changeRCP'
    ]),
    toggleRCP () {
      this.changeRCP(this.rcp === '2.6' ? '6.0' : '2.6')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .switch {
    width: 28px;
    height: 16px;
    margin-bottom: 0.5rem;

    rect {
      // stroke-width: 10px;
      transition: fill 0.5s, stroke 0.5s;
      fill: $color-neon;
      stroke: getColor(neon, 45);
    }

    circle {
      transition: transform 0.5s;
      transform: translate(0);
      fill: $color-white;

      &.isRight {
        transform: translate(12px);
      }
    }
  }

  .button-wrapper {
    grid-column-start: 2;
    grid-column-end: 3;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 28px auto;
    align-items: center;
    // justify-items: center;
    grid-column-gap: 1rem;
    justify-content: center;
    align-content: center;

    span {
      color: $color-pale-gray;
      transition: color 0.5s;
      line-height: 1;

      &.isActive {
        color: $color-neon;
      }
    }
  }

</style>
