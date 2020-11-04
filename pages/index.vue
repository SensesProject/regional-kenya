<template>
  <main class="page">
    <SectionIntroduction />
    <SectionPart1 />
    <SectionPart2 />
    <SectionProjections />
    <SectionChange />
    <SectionImpacts />
    <SectionAdaptation />
    <SectionConclusion />
    <div class="container">
      <SensesMeta id="kenya" />
    </div>
  </main>
</template>

<script>
  import SensesMeta from 'library/src/components/SensesMeta.vue'
  import SectionIntroduction from '~/components/Section-Introduction'
  import SectionPart1 from '~/components/Section-Part1'
  import SectionPart2 from '~/components/Section-Part2'
  import SectionChange from '~/components/SectionChange'
  import SectionProjections from '~/components/Section-Projections'
  import SectionImpacts from '~/components/Section-Impacts'
  import SectionAdaptation from '~/components/Section-Adaptation'
  import SectionConclusion from '~/components/Section-Conclusion'

  export default {
    components: {
      SectionIntroduction,
      SectionPart1,
      SectionPart2,
      SectionChange,
      SectionAdaptation,
      SectionProjections,
      SensesMeta,
      SectionImpacts,
      SectionConclusion
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/global";

</style>
