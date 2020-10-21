<template>
  <section class="step step--columns box">
    <h3>RCP {{ rcp }}</h3>
    <div class="content" v-if="rcp === '2.6'">
      <p>Annual production for all essential crops is expected to decrease in all countries exporting essential crops to Kenya given low to medium global warming (RCP2.6) between 2035-2064 and 2070-2099. Production decreases in these countries result in a shrink in their capacity to export essential crops to Kenya.</p>
      <p>In the sustainability scenario (SSP1) Kenya can cope with reduced possibilities to import essential crops. As technology transfer to Kenya is specifically focused on smart agriculture solutions, Kenya manages to increase local agriculture production through alternative sustainable solutions. Accordingly, dependency to food imports decreases and food security improves despite a decline in imports.</p>
      <p>In the inequality scenario (SSP4), Kenya substantially depends on import of food, due to long periods of droughts and lack of smart irrigation technologies. the decrease in the production of essential crops in exporting countries results in a significant decline in exports to Kenya. Decreased food imports coupled with population growth exacerbates risks to food security. Imported foods to Kenya are distributed and consumed unequally. While higher-income communities and urban areas benefit from luxury imports, many cannot afford to acquire essential food crops.</p>
    </div>
    <div class="content" v-else>
      <p>Annual production of essential crops is expected to remain steady or face insignificant changes in most countries exporting essential crops to Kenya given high global warming (RCP6.0) between 2035-2064 and 2070-2099. Exceptions are Russia with close to 20% decrease in wheat production and South Africa with close to 21% increase in production of corn. These exceptions are outlier data points and cancel out each other, hence, the average of production in all exporting countries remains steady.</p>
      <p>In regional rivalry (SSP3), Kenya reduced food imports even though the exporting countries could maintain their export capacities. In this scenario, Kenya aims at reducing dependency to food imports, especially from outside EAC bloc, by encouraging local producers to increase production. Ever-increasing demand for essential crops by growing population in Kenya results in an upsurge in agricultural production and consequently, excessive land use and water resources degradation. Energy intensive and fossil fuel based agricultural technologies also exacerbate air pollution, and risks to public health.</p>
      <p>In fossil-fuelled development (SSP5), Kenya aims at expanding import of food to improve food security in the face of decreasing local agricultural productions. As population is slightly decreasing in Kenya, demand for essential crops is not growing exponentially. Being well connected in global markets, Kenya manages to import needed crops either from direct exporter countries or from a mix of products in intermediary markets and maintain food security at large.</p>
    </div>
  </section>
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

  .box {
    @include box();
    border-color: $color-neon;
    padding: 2rem 4rem;

    .content {
      grid-column-start: 1 !important;
      grid-column-end: 6 !important;
    }
  }

</style>
