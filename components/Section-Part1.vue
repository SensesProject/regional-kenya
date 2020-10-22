<template>
  <div class="container">
    <section class="step step--columns">
      <header>
        <span class="caption">Part 1</span>
        <h2>Cross-scale scenarios (called Nested scenarios in the LM figure)</h2>
      </header>
      <div class="content">
        <p>To develop cross-scale scenarios, we link the development of local scenarios to the Shared Socioeconomic Pathways (SSPs) [hyperlink to the primer]. We use a combined top-down and bottom-up approach (Nilsson et al., 2017) to develop Kenyan scenarios linked to the SSPs, where the top-down element is a set of four SSPs ,  and the bottom-up element includes stakeholder-generated local and regional knowledge concerning future vulnerability to cross-border climate impacts.</p>
        <p>Local scenarios for Kenya were developed through a co-production process implemented in a workshop series. The co-production process started with the bottom-up element where using brainstorming [hyperlink to the co-production DB] techniques, stakeholders generated information on the relevant socioeconomic drivers for understanding future vulnerabilities to cross-border climate risks. The time horizon was set to 2040-2060. Drivers were prioritized based on the level of importance (to the understanding of future cross-border climate impacts) and uncertainty, i.e. the extent to which the future development of a driver is unclear, vague, or least-predictable. The drivers that scored high on both importance and uncertainty were selected as the key drivers.</p>
        <p>Then, as the top-down element, the global SSPs were introduced into the process as ‘boundary conditions’ (context scenarios) for the future development of the key driving forces. The overarching question to guide the process was “How could driver x unfold at the local and regional level in the world described in SSP1,3,4, and 5?”. A variation of morphological analysis [hyperlink to the co-production DB] was used to identify plausible future states for the identified drivers. The combination of key drivers and their associated states given each SSP provide the skeleton for the local and regional extensions of the respective SSP.</p>
      </div>
      <aside class="footnotes">
        <p><sup>1</sup> To constrain the number of scenarios for consideration and decrease the complexity of the process, it was decided to use only four out of the five SSPs. As SSP2 (Middle of the Road) storyline lacks a certain level of diversity in relation to the other SSPs and represents a business as usual scenario, we decided to exclude SSP2 from our scenario set.</p>
      </aside>
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
