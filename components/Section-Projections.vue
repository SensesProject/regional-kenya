<template>
  <div class="container">
    <section class="step step--ssp">
      <IntersectionObserver :step="0" :noStyling="true" classes="isActive">
        <p>Additionally, for each extended SSP, we used the SSP quantifications database (Riahi et al., 2017) to add quantitative projections on economic development (GDP) and population growth for Kenya (Crespo Cuaresma, 2017; Kc & Lutz, 2017).</p>
      </IntersectionObserver>
      <IntersectionObserver :step="1" :noStyling="true" :classes="this.ssp === 'SSP1' ? 'isActive' : ''">
        <h3 class="ssp1">SSP 1: Sustainability</h3>
        <p>GDP increases gradually in the <em>Sustainability</em> scenario due to transition to a green economy and prioritizing sustainable development over economic growth.</p>
        <p>Population remains steady in mid-term future and decreases slowly in the long run in the <em>Sustainability</em> scenarios. Decreased population together with increasing GDP growth results in improved livelihood.</p>
      </IntersectionObserver>
      <IntersectionObserver :step="3" :noStyling="true" :classes="this.ssp === 'SSP3' ? 'isActive' : ''">
        <h3 class="ssp3">SSP 3: Regional rivalry</h3>
        <p>GDP growth is extremely low in the <em>Regional rivalry</em> scenario due to increasing conflicts, securitization of markets and lack of technologies and resources to assist the country for economic advancement.</p>
        <p>Population grows significantly in the <em>Regional rivalry</em> scenario. I Increased population coupled with slow GDP growth leads Kenya into technological backwardness, worsened inequalities, and escalating vulnerability to climate impacts.</p>
      </IntersectionObserver>
      <IntersectionObserver :step="4" :noStyling="true" :classes="this.ssp === 'SSP4' ? 'isActive' : ''">
        <h3 class="ssp4">SSP 4: Inequality</h3>
        <p>GDP growth is significantly slow in the <em>Inequality</em> scenario, indicating overall dysfunctional economic performance and ever-growing inequalities. </p>
        <p>Population grows significantly in the <em>Inequality</em> scenario. Increased population coupled with slow GDP growth leads Kenya into technological backwardness, worsened inequalities, and escalating vulnerability to climate impacts.</p>
      </IntersectionObserver>
      <IntersectionObserver :step="5" :noStyling="true" :classes="this.ssp === 'SSP5' ? 'isActive' : ''">
        <h3 class="ssp5">SSP 5: Fossil-fueled development</h3>
        <p>GDP growth is exceptionally high in the <em>Fossil-fuelled development</em> scenario, due to increasing regional collaboration and partnership coupled with technological advancements which assist Kenya growing economically.</p>
        <p>Population remains steady in mid-term future and decreases slowly in the long run in the <em>Fossil-fuelled development</em> scenarios. Decreased population together with increasing GDP growth results in improved livelihood.</p>
      </IntersectionObserver>
    </section>
    <ChartTimes />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ChartTimes from '~/components/Chart-Times'
import IntersectionObserver from 'library/src/components/IntersectionObserver'

export default {
  components: {
    ChartTimes,
    IntersectionObserver
  },
  computed: {
    ...mapState('time', [
      'ssp'
    ])
  },
  methods: {
    ...mapActions('time', [
      'setSSP'
    ])
  },
  mounted () {
    this.$on('step', (step) => {
      this.setSSP(`SSP${step}`)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .step {
    &.step--ssp {
      display: grid;
      grid-row-gap: 4rem;

      grid-column-start: 1;
      grid-column-end: 6;

      @include query($narrow) {
        grid-column-end: 5;
      }

      @include query($medium) {
        grid-column-start: 1;
        grid-column-end: 4;
      }

      @include query($wide) {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      & > * {
        opacity: 0.3;
        transition: opacity 0.3s;

        &.isActive {
          opacity: 1;

          h3 {
            // text-underline-offset: -5px;
            // text-decoration: underline;
            // text-decoration-thickness: 10px;
            // text-decoration-style: solid;
            // text-decoration-skip-ink: none;
            display: inline-block;
            line-height: 1;
            margin-bottom: 0.4em;

            &.ssp1 {
              background: linear-gradient(to top, getColor(green, 100) 7px, transparent 7px);
            }

            &.ssp3 {
              // text-decoration-color: getColor(red, 100);
              background: linear-gradient(to top, getColor(red, 100) 7px, transparent 7px);
            }

            &.ssp4 {
              background: linear-gradient(to top, getColor(yellow, 100) 7px, transparent 7px);
              // text-decoration-color: getColor(yellow, 100);
            }

            &.ssp5 {
              background: linear-gradient(to top, getColor(violet, 100) 7px, transparent 7px);
              // text-decoration-color: getColor(violet, 100);
            }
          }
        }
      }
    }
  }

</style>
