<template>
  <div class="container">
    <section class="step">
      <header>
        <span class="caption">Part 2</span>
        <h2>Narratives and cartoons for the extended SSPs</h2>
      </header>
      <p>In the next step, the research team created narratives for the extended SSPs. Visualizations were also created based on the short versions of narratives for the extended SSPs. We used <a target="_blank" href="https://climatescenarios.org/finder/?name=INTUITIVE%20LOGICS">intuitive logic</a> to develop the narratives, and presented both narratives and visualizations using scenario-axes technique (van ’t Klooster & van Asselt, 2006).</p>
    </section>
    <ExtendedSSPs />
  </div>
</template>

<script>
import ExtendedSSPs from '~/components/ExtendedSSPs'

export default {
  components: {
    ExtendedSSPs
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
