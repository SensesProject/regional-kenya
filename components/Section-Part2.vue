<template>
  <div class="container">
    <section class="step">
      <header>
        <span class="caption">Part 2</span>
        <h2>Narratives and cartoons for the extended SSPs</h2>
      </header>
      <p>The research team created narratives for the extended SSPs based on the skeletons. Visualizations were also created based on the short versions of narratives for the extended SSPs. We presented both narratives and visualizations using a variation of <a target="_blank" href="https://climatescenarios.org/finder/techniques/?name=intuitive%20logics">intuitive logic</a> named scenario-axes technique (van ’t Klooster & van Asselt, 2006).</p>
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
