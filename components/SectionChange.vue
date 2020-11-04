<template>
  <div class="container">
    <section class="step step--columns">
      <header>
        <span class="caption">Part 3</span>
        <h2>Quantitative enhanced scenarios</h2>
      </header>
      <div class="content">
        <p>To further enhance the narratives and better inform adaptation planning to cross-border climate impacts, we also used the results from global climate impacts modelling to illustrate future risks to food security via import.  Food security and climate impacts on food imports was identified as a key future driver by local stakeholders. Although making quantitative scenarios did not involve any co-productions process, we believed that adding quantitative modeling results enhances the socioeconomic scenarios and improves stakeholder engagement throughout the co-production process.</p>
        <p>Kenya significantly depends on import of essential crops, including wheat, corn, and rice. In 2017, imports accounted for 29% of total wheat consumption, 27% of corn and 19% of rice. Of the total imported wheat, 30% came from Russia, 19% from Argentina, 12% from Ukraine, and 9% from Canada. 45% of the imported corn came from Mexico, 19% from South Africa, and 11% from Uganda. And of the total rise imported to the country, 67% came from Pakistan and 25% from Thailand (Harvard University, 2019).</p>
        <p>For the analysis here we used data generated within the ISIMIP project, more specifically within its second round ISIMIP2b (Frieler et al., 2017) and projected annual crop production in the key exporting countries to Kenya for wheat, rice and corn. The ISIMIP2b climate scenarios entail both RCP2.6 and RCP6.0 climates from four Earth system <a href="https://climatescenarios.org/primer/climate-impacts" target="_blank">models</a> (GFDL-ESM2M (Dunne et al., 2012), HadGEM2-ES (Collins et al., 2011), IPSL-CM5A-LR (Boucher et al., 2020) and MIROC5 (Watanabe et al., 2010) that were run in the context of the CMIP5 project (Taylor et al., 2012).</p>
        <p>Running crop models under low-end and medium/high end climate change (<a href="https://climatescenarios.org/primer/climate-change" target="_blank">RCPs 2.6</a> linked to ESSP 1 and 4 and <a href="https://climatescenarios.org/primer/climate-change" target="_blank">RCP6.0</a> linked to ESSP 3 and 5), we developed alternative projections of crop production in the countries exporting essential crops to Kenya for two time-slices, 2035-2064 and 2070-2099.</p>
      </div>
    </section>
    <figure class="graphic layout--wide graphic--changes">
      <ChartChange type="Corn" />
      <ChartChange type="Rice" />
      <ChartChange type="Wheat" />
      <figcaption class="cap figcaption">Figure 4. Change of production (unit million ton) in key exporting countries to Kenya (RCP2.6 and RCP6.0)</figcaption>
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
