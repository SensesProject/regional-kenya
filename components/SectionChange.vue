<template>
  <div class="container">
    <section class="step step--columns">
      <header>
        <span class="caption">Part 3</span>
        <h2>Quantitative enhanced scenarios</h2>
      </header>
      <div class="content">
        <p>To further enhance the scenarios and better inform adaptation planning to cross-border climate impacts, we also used results from global climate impacts modelling to illustrate future risks to food security via import.  Food security was identified as a key future driver by local stakeholders. Although making quantitative scenarios did not involve any co-productions process, adding quantitative modeling results enhanced the socio-economic scenarios and improved stakeholder engagement throughout the co-production process.</p>
        <p>Kenya significantly depends on import of essential crops, including wheat, corn, and rice. In 2017, imports accounted for 29% of total wheat consumption, 27% of corn and 19% of rice.</p>
        <p>For the analysis here we used data generated within the ISIMIP project (Frieler et al., 2017) and projected annual crop production in the key exporting countries to Kenya for wheat, rice and corn.</p>
        <p>Running crop models under low-end and medium/high end climate change (<a href="https://climatescenarios.org/primer/climate-change" target="_blank">RCPs 2.6</a> linked to ESSP 1 and 4 and <a href="https://climatescenarios.org/primer/climate-change" target="_blank">RCP6.0</a> linked to SSP 3 and 5), we developed alternative projections of crop production in key countries exporting to Kenya for two time-slices, 2035-2064 and 2070-2099 (see figure 4).</p>
      </div>
    </section>
    <figure class="graphic layout--wide graphic--changes">
      <ChartChange type="Corn" />
      <ChartChange type="Rice" />
      <ChartChange type="Wheat" />
      <figcaption class="cap figcaption">Figure 3. Change of crop production (unit million ton) in key countries exporting to Kenya (given RCP2.6 and RCP6.0)</figcaption>
      <ButtonChange />
    </figure>
    <BoxChange />
  </div>
</template>

<script>
import ChartChange from '~/components/Chart-Change'
import ButtonChange from '~/components/Button-Change'
import BoxChange from '~/components/Box-Change'

export default {
  components: {
    ChartChange,
    ButtonChange,
    BoxChange
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic--changes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

</style>
