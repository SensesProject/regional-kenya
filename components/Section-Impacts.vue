<template>
  <div class="container">
    <section class="step">
      <header>
        <span class="caption">Part 4</span>
        <h2>Assessing future cross-border climate impacts</h2>
      </header>
      <p>We used the developed scenarios to identify future cross-border climate impacts for Kenya together with stakeholders. <a href="https://climatescenarios.org/finder/techniques/?name=brainstorming" target="_blank">Brainstorming</a> techniques were used to identify the most important future cross-border climate impacts given the alternative future scenarios.</p>
      <p>The extended SSPs and four risk pathways through which climate impacts are transmitted across space (Hedlund et al., 2018) were used to structure the brainstorming session. The guiding question was “What are the most important future cross-border climate impacts (for Kenya) in people, biophysical, trade and finance risk pathways given the extended SSP1,3,4 and 5?”. The time perspective was the same as the one governing the scenario development, i.e. 2040-2060.</p>
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
