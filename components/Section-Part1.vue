<template>
  <div class="container">
    <section class="step step--columns">
      <header>
        <span class="caption">Part 1</span>
        <h2>Multi-scale scenarios</h2>
      </header>
      <div class="content">
        <p>To develop multi-scale socio-economic scenarios, we linked the development of local scenarios to the <a target="_blank" href="https://climatescenarios.org/primer/socioeconomic-development">Shared Socioeconomic Pathways (SSPs)</a>. We used a combined top-down and bottom-up approach (Nilsson et al., 2017) to develop Kenyan socio-economic scenarios linked to the SSPs, where the top-down element is a set of global SSPs, and the bottom-up element includes stakeholder-generated local and regional knowledge concerning future vulnerability to cross-border climate impacts. To limit the number of scenarios for consideration and decrease the complexity of the process, we only used four out of the five SSPs. SSP2 (Middle of the Road) was excluded as the storyline lacks a certain level of diversity in relation to the other SSPs and represents a business as usual scenario.</p>
        <p>Local scenarios for Kenya were developed through a co-production process implemented in a workshop series. The co-production process started with the bottom-up element where using <a href="https://climatescenarios.org/finder/techniques/?name=brainstorming" target="_blank">brainstorming</a> techniques, stakeholders generated information on the relevant socio-economic drivers for understanding future vulnerabilities to cross-border climate impacts. The time horizon was set to 2040-2060. Drivers were prioritized based on the level of importance (to the understanding of future cross-border climate impacts) and uncertainty, i.e. the extent to which the future development of a driver is unclear, vague, or least-predictable. The drivers that scored high on both importance and uncertainty were selected as the key drivers.</p>
        <p>The global SSPs were introduced into the process as ‘boundary conditions’ (context scenarios) for the future development of the key driving forces. A variation of <a target="_blank" href="https://climatescenarios.org/finder/techniques/?name=morphological%20analysis">morphological analysis</a> was used to identify plausible future states contingent on the global development as expressed by the selected SSPs for the identified key drivers. The combination of key drivers and their associated states given each SSP provided the skeleton for the sub-global extension of the respective SSP (Table 1).</p>
      </div>
    </section>
    <TableSSPDriver />
  </div>
</template>

<script>
import TableSSPDriver from '~/components/TableSSPDriver'

export default {
  components: {
    TableSSPDriver
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
