<template>
  <div class="container">
    <section class="step">
      <header>
        <span class="caption">Part 4</span>
        <h2>Future cross-border climate impacts (called risk assessment in the LM figure)</h2>
      </header>
      <p>In the next step, we used the scenario set as an analytical tool to identify a set of future cross-border climate impacts for Kenya together with stakeholders. The process started with a conversation on the current adaptation strategy of Kenya and after the discussion, Brainstorming [hyperlink to the co-production techniques DB] techniques were used to identify the most important future cross-border climate impacts that are going to need adaptation within Kenya given the alternative future scenarios.</p>
      <p>The extended SSPs and four pathways through which climate impacts are transmitted across space (Hedlund et al., 2018) were used to structure our analysis frame for the brainstorming session. The guiding question was “What are the most important future cross-border climate impacts (for Kenya) in people, biophysical, trade and finance risk pathways given the extended SSP1,3,4 and 5?”. The time perspective was the same as the one governing the scenario development, i.e. 2040-2060.</p>
    </section>
    <ChartImpacts />
  </div>
</template>

<script>
import ChartImpacts from '~/components/Chart-Impacts'

export default {
  components: {
    ChartImpacts
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
