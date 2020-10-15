<template>
  <g v-tooltip="label" :class="color">
    <defs>
      <radialGradient id="myGradient">
        <stop offset="0%" stop-color="#ffd89a" />
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
      </radialGradient>
    </defs>
    <circle
      class="p2"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${14}px`"
    />
    <circle
      class="p3"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${30}px`"
    />
    <circle
      :style="{ transformOrigin: `${x}px ${y}px`}"
      class="p4"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${12}px`"
    />
    <circle
      class="p1"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${5.5}px`"
    />
  </g>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    },
    isSmall: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  @keyframes pulse {
    0% {
      transform: scale(1.0);
      opacity: 0.1;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  circle {
    &.p1 {
      fill: $color-neon;
      stroke: getColor(neon, 40);
      stroke-width: 1px;
      stroke-opacity: 0.4;
    }

    &.p2 {
      fill: $color-neon;
      fill-opacity: 0.1;
      stroke: getColor(neon, 80);
      stroke-width: 1.5px;
      stroke-opacity: 0.2;
    }

    &.p3 {
      // fill: getColor(neon, 100);
      fill-opacity: 0;
      // stroke: getColor(neon, 80);
      stroke-opacity: 0;
    }

    &.p4 {
      fill: transparent;
      stroke: $color-neon;
      stroke-opacity: 1;
      animation: pulse 1.5s ease infinite;
    }
  }

  .red {
    circle {
      &.p1 {
        fill: $color-red;
        stroke: getColor(red, 40);
      }

      &.p2 {
        fill: $color-red;
        stroke: getColor(red, 80);
      }

      &.p4 {
        stroke: $color-red;
      }
    }
  }

  .yellow {
    circle {
      &.p1 {
        fill: $color-yellow;
        stroke: getColor(yellow, 40);
      }

      &.p2 {
        fill: $color-yellow;
        stroke: getColor(yellow, 80);
      }

      &.p4 {
        stroke: $color-yellow;
      }
    }
  }

  .green {
    circle {
      &.p1 {
        fill: $color-green;
        stroke: getColor(green, 40);
      }

      &.p2 {
        fill: $color-green;
        stroke: getColor(green, 80);
      }

      &.p4 {
        stroke: $color-green;
      }
    }
  }

  .blue {
    circle {
      &.p1 {
        fill: $color-blue;
        stroke: getColor(blue, 40);
      }

      &.p2 {
        fill: $color-blue;
        stroke: getColor(blue, 80);
      }

      &.p4 {
        stroke: $color-blue;
      }
    }
  }

</style>
