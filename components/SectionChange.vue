<template>
  <div class="container">
    <section class="step step--columns">
      <header>
        <span class="caption">Part 3</span>
        <h2>Quantitative enhanced scenarios</h2>
      </header>
      <div class="content">
        <p>Since the scenarios were constructed to inform adaptation planning to cross-border climate impacts, we also wanted them to include elements of links to outside Kenya. To this end we opted for illustrating such links with global climate impacts modelling outputs. We reviewed future drivers of importance at local and regional scale identified by stakeholders and selected food imports as a key future driver for running climate impact models.</p>
        <p>For the analysis here we used data generated within the ISIMIP [hyperlink to ISIMIP] project, more specifically within its second round ISIMIP2b (Frieler et al., 2017). The ISIMIP2b climate scenarios entail both RCP2.6 and RCP6.0 climates from four Earth system models (GFDL-ESM2M (Dunne et al., 2012), HadGEM2-ES (Collins et al., 2011), IPSL-CM5A-LR (Boucher et al., 2020) and MIROC5 (Watanabe et al., 2010) that were run in the context of the CMIP5 project (Taylor et al., 2012).  The crop model data employed here are from the three crop models GEPIC (Folberth et al., 2012; Izaurralde et al., 2006; J. Liu et al., 2007; The EPIC Crop Growth Model, n.d.),,  LPJmL (Bondeau et al., 2007) and PEPIC (W. Liu et al., 2016).</p>
        <p>Running crop models under low-end and medium/high end climate change (RCPs 2.6 [hyperlink to the primer, climate change page] linked to ESSP 1 and 4 and RCP6.0 [hyperlink to the primer, climate change page] linked to ESSP 3 and 5), we developed alternative projections of crop production in the countries exporting essential crops to Kenya  for two time-slices, 2035-2064 and 2070-2099.</p>
      </div>
    </section>
    <section class="graphic graphic--changes">
      <ChartChange type="Corn" />
      <ChartChange type="Rice" />
      <ChartChange type="Wheat" />
      <ButtonChange />
    </section>
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

</style>
