<template>
  <main class="page">
    <SectionIntroduction />
    <SectionPart1 />
    <SectionPart2 />
    <SectionProjections />
    <SectionChange />
    <SectionImpacts />
    <SectionAdaptation />
    <div class="container">
      <SensesMeta id="primer" />
    </div>
  </main>
</template>

<script>
  import SensesMeta from 'library/src/components/SensesMeta.vue'
  import SectionIntroduction from '~/components/Section-Introduction'
  import SectionPart1 from '~/components/Section-Part1'
  import SectionPart2 from '~/components/Section-Part2'
  import SectionProjections from '~/components/Section-Projections'
  import SectionImpacts from '~/components/Section-Impacts'
  import SectionAdaptation from '~/components/Section-Adaptation'

  export default {
    components: {
      SectionIntroduction,
      SectionPart1,
      SectionPart2,
      SectionAdaptation,
      SectionProjections,
      SensesMeta,
      SectionImpacts
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/global";

</style>
