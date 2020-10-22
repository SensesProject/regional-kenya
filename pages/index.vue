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

  .page {
    min-height: 96vh;
    margin: 4vh 2vw;
    display: grid;
    grid-row-gap: 8rem;
    justify-content: center;
  }

  .container {
    width: 96vw;
    max-width: 1300px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;

    img {
      width: 100%;
    }

    .introduction {
      grid-column-start: 1;
      grid-column-end: 4;
      margin: 5vh 0;
    }

    .step {
      grid-column-start: 1;
      grid-column-end: 3;

      header {
        margin-bottom: 2rem;
      }

      &.step--ssp {
        display: grid;
        grid-row-gap: 4rem;

        & > * {
          opacity: 0.3;
          transition: opacity 0.3s;

          &.isActive {
            opacity: 1;

            h3 {
              text-underline-offset: -5px;
              text-decoration: underline;
              text-decoration-thickness: 10px;
              text-decoration-style: solid;
              text-decoration-skip-ink: none;

              &.ssp1 {
                text-decoration-color: getColor(green, 100);
              }

              &.ssp3 {
                text-decoration-color: getColor(red, 100);
              }

              &.ssp4 {
                text-decoration-color: getColor(yellow, 100);
              }

              &.ssp5 {
                text-decoration-color: getColor(violet, 100);
              }
            }
          }
        }
      }

      &.step--columns {
        grid-column-end: 6;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 4rem;

        header {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        .content {
          column-count: 2;
          column-gap: 4rem;
          grid-column-start: 1;
          grid-column-end: 5;
        }

        .footnotes {
          grid-row-start: 2;
          grid-column-start: 5;
          grid-column-end: 6;
        }
      }
    }

    .steps {
      grid-column-start: 1;
      grid-column-end: 4;
      display: grid;
      grid-row-gap: 4rem;
    }

    .module-meta {
      grid-column-start: 1;
      grid-column-end: 6;
    }

    .graphic {
      &.graphic--wide {
        grid-column-start: 1;
        grid-column-end: 6;
      }

      &.graphic--changes {
        grid-column-start: 1;
        grid-column-end: 6;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }

      &.graphic--left {
        grid-column-start: 1;
        grid-column-end: 4;
      }

      &.graphic--times {
        grid-column-start: 3;
        grid-column-end: 6;
        display: grid;
        height: 70vh;
        grid-row-gap: 2rem;
        align-items: start;
      }

      &.graphic--right {
        grid-column-start: 4;
        grid-column-end: 6;
      }

      &.graphic--vision {
        grid-column-start: 3;
        grid-column-end: 6;
      }

      &.graphic--pathway {
        position: sticky;
        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-end: span 3;
      }
    }
  }
</style>
