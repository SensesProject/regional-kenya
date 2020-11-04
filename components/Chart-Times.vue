<template>
  <section class="graphic layout--right graphic--times" ref="graphicTimes" :style="styling">
    <ChartTime type="gdp">
      <template v-slot:header>
        <h3>Change in GDP</h3>
        <h5>Projections of GDP per SSP in Kenya</h5>
      </template>
    </ChartTime>
    <ChartTime type="population">
      <template v-slot:header>
        <h3>Change in population</h3>
        <h5>Projections of population per SSP in Kenya</h5>
      </template>
      <template v-slot:footer>
        <span>Figure 3. Projections of GDP and population, based on the SSP database hosted by the IIASA Energy Program at https://tntcat.iiasa.ac.at/SspDb</span>
      </template>
    </ChartTime>
  </section>
</template>

<script>
import ChartTime from '~/components/Chart-Time'
import { isUndefined } from 'lodash'

export default {
  components: {
    ChartTime
  },
  data () {
    return {
      height: 0
    }
  },
  computed: {
    styling () {
      console.log(this.height)
      return { top: `calc(50% - ${this.height / 2}px)` }
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
      const { graphicTimes: el } = this.$refs
      if (!isUndefined(el)) {
        const height = el.clientHeight || el.parentNode.clientHeight
        this.height = height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic--times {
    position: sticky;
    top: 0;
    display: grid;
    height: 70vh;
    grid-row-gap: $gap-v-inner;
    align-items: start;

    grid-column-start: 1;
    grid-column-end: 6;

    @include query($narrow) {
      grid-column-start: 1;
      grid-column-end: 5;
    }

    @include query($medium) {
      grid-column-start: 4;
      grid-column-end: 6;
    }

    @include query($wide) {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }

</style>
