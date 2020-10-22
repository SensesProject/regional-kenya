<template>
  <main class="page">
    <div class="container">
      <section id="introduction" class="step introduction">
        <header>
          <h1>Kenya case study page</h1>
          <h3>Assessing future cross-border climate risks and adaptation options for Kenya.</h3>
        </header>
        <p>In this case study, we develop and use a stakeholder-driven scenario framework to explore future cross-border climate impacts in Kenya and co-produce adaptation options to address those impacts. The framework comprises a set of stakeholder-generated sub-global scenarios linked to the global climate scenario architecture, especially the Shared Socioeconomic Pathways (SSPs) [hyperlink to the primer].</p>
      </section>
    </div>
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
    <div class="container">
      <section class="step">
        <header>
          <span class="caption">Part 2</span>
          <h2>Narratives and cartoons for the extended SSPs</h2>
        </header>
        <p>In the next step of the scenario process, the research team created narratives for the extended SSPs. Visualizations were also created based on the short versions of narratives for the extended SSPs by a data visualization and graphic design group. We used intuitive logic [hyperlink to the co-production DB] to develop the narratives and presented both narratives and visualizations using scenario-axes technique (van ’t Klooster & van Asselt, 2006).</p>
      </section>
      <ExtendedSSPs />
    </div>
    <div class="container">
      <section class="step step--ssp">
        <IntersectionObserver :step="0" :noStyling="true" classes="isActive">
          <p>Additionally, for each extended SSP, we used the SSP quantifications database (Riahi et al., 2017) to add quantitative projections on economic development (GDP) and population growth (Crespo Cuaresma, 2017; Kc & Lutz, 2017).</p>
        </IntersectionObserver>
        <IntersectionObserver :step="1" :noStyling="true" :classes="this.ssp === 'SSP1' ? 'isActive' : ''">
          <h3 class="ssp1">SSP 1: Sustainability</h3>
          <p>GDP increases gradually in the sustainability scenario due to transition to a green economy and prioritizing sustainable development over economic growth.</p>
          <p>population remains steady in mid-term future and decreases slowly in longer run under the sustainability and fossil-fueled development scenarios. Decreased population together with increasing GDP growth results in improved livelihood in these two scenarios.</p>
        </IntersectionObserver>
        <IntersectionObserver :step="3" :noStyling="true" :classes="this.ssp === 'SSP3' ? 'isActive' : ''">
          <h3 class="ssp3">SSP 3: Regional rivalry</h3>
          <p>GDP growth is extremely low in the regional rivalry scenario due to increasing conflicts, securitization of markets and lack of technologies and resources to assist the country for economic advancement.</p>
          <p>Projections show significant population growth in Kenya given the regional rivalry and inequality scenarios. In both these scenarios, increased population coupled with slow GDP growth leads Kenya into technological backwardness, worsened inequalities, and escalating vulnerability to climate impacts.</p>
        </IntersectionObserver>
        <IntersectionObserver :step="5" :noStyling="true" :classes="this.ssp === 'SSP5' ? 'isActive' : ''">
          <h3 class="ssp5">SSP 5: Fossil-fueled development</h3>
          <p>Projections show highest GDP growth in the fossil-fueled development scenario due to increasing regional collaboration and partnership coupled with technological advancements which assist Kenya growing economically.</p>
          <p>Population remains steady in mid-term future and decreases slowly in longer run under the sustainability and fossil-fueled development scenarios. Decreased population together with increasing GDP growth results in improved livelihood in these two scenarios.</p>
        </IntersectionObserver>
        <IntersectionObserver :step="4" :noStyling="true" :classes="this.ssp === 'SSP4' ? 'isActive' : ''">
          <h3 class="ssp4">SSP 4: Inequality</h3>
          <p>The inequality scenario projects a significantly slow GDP growth, indicating overall dysfunctional economic performance and ever-growing inequalities.</p>
          <p>Projections show significant population growth in Kenya given the regional rivalry and inequality scenarios. In both these scenarios, increased population coupled with slow GDP growth leads Kenya into technological backwardness, worsened inequalities, and escalating vulnerability to climate impacts.</p>
        </IntersectionObserver>
      </section>
      <ChartTimes />
    </div>
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
      <section class="step">
        <header>
          <span class="caption">Part 4</span>
          <h2>Future cross-border climate impacts (called risk assessment in the LM figure)</h2>
        </header>
        <p>In the next step, we used the scenario set as an analytical tool to identify a set of future cross-border climate impacts for Kenya together with stakeholders. The process started with a conversation on the current adaptation strategy of Kenya and after the discussion, Brainstorming [hyperlink to the co-production techniques DB] techniques were used to identify the most important future cross-border climate impacts that are going to need adaptation within Kenya given the alternative future scenarios.</p>
        <p>The extended SSPs and four pathways through which climate impacts are transmitted across space (Hedlund et al., 2018) were used to structure our analysis frame for the brainstorming session. The guiding question was “What are the most important future cross-border climate impacts (for Kenya) in people, biophysical, trade and finance risk pathways given the extended SSP1,3,4 and 5?”. The time perspective was the same as the one governing the scenario development, i.e. 2040-2060.</p>
      </section>
      <ChartVision />
    </div>
    <div class="container">
      <section class="step">
        <header>
          <span class="caption">Part 4</span>
          <h2>Adaptation options</h2>
        </header>
        <p>In the next step, participants were invited to co-produce adaptation options to address future cross-border climate impacts through a participatory brainstorming [hyperlink to the co-production techniques DB] session. The process of generating adaptation options was focused on the present time and near future. </p>
        <p>After synthesizing the generated adaptation options, we identified the main themes of adaptation options and activities that were echoed along the four risk pathways and across several extended SSPs. We clustered these adaptation options into three key areas of adaptation and recommended those to policy makers to national and local adaptation planners and policy makers for improving Kenya’s adaptation planning at present and near future in order to increase capacity to mitigate/adapt to cross-border climate impacts in 2040-2060-time horizon. </p>
      </section>
      <section class="graphic graphic--wide">
        <table class="style">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Adaptation area</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i class="e">🤝</i></td>
              <td class="first">Transnational collaboration and governance</td>
              <td><ul>
                <li>A big number of adaptation options identified were transnational (regional, international) adaptation activities suggesting that despite the historical trends, stakeholders believe that in order to be effective, adaptation is a collaborative progress being made through transnational governance and transboundary progress.</li>
                <li>Transnational and inter-governmental co-management of shared natural resources (i.e. transboundary water and shared ecosystems) were considered effective adaptation option to prepare the country to resolve future regional conflicts and transboundary water disputes.</li>
                <li>Transnational policy frameworks and legal programs for adaptation could assist Kenya and neighbouring countries to tackle common cross-border climate change impacts in a collective effort.</li>
              </ul></td>
            </tr>
            <tr>
              <td><i class="e">🗺️</i></td>
              <td class="first">Increased research on cross-border climate impacts and transboundary adaptation</td>
              <td><ul>
                <li>When co-producing adaptation options, stakeholders emphasized that investing in research on cross-border climate impacts is necessary to prepare adaptation planning in Kenya to address future impacts transmitting across borders.</li>
                <li>Several adaptation options encompassed urgent needs for investing in research and development and financing climate-smart technologies especially in regions more vulnerable to cross-border climate impacts. This option would help Kenya to adapt to reducing climate finance and ODA coming from outside of the country.</li>
                <li>Although most adaptation options relevant to research were national, advocating for international knowledge sharing and technological collaborations were mentioned at the transnational level.</li>
              </ul></td>
            </tr>
            <tr>
              <td><i class="e">🏢</i></td>
              <td class="first">Public-private partnership for resilience building</td>
              <td><ul>
                <li>Options relevant to public-private partnership were a mix of policy- and industry-based adaptation activities, suggesting that while private sectors need to get involved in adaptive capacity building for their own future benefits, policy makers are also required to make incentives for private sector participation by setting up policies supporting private sectors.</li>
                <li>Stakeholders recognized the importance of public-private partnership at both national and transnational levels for adaptation governance by touching upon the importance of private investments for financing adaptation research and development. Co-managing business activities in shared ecosystems was another role for private sector that would address the impact of decreasing economic activities in sectors such as tourism.</li>
              </ul></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div class="container">
      <SensesMeta id="primer" />
    </div>
  </main>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ChartVision from '~/components/Chart-Vision'
  import ChartChange from '~/components/Chart-Change'
  import ChartTimes from '~/components/Chart-Times'
  import BoxChange from '~/components/Box-Change'
  import ExtendedSSPs from '~/components/ExtendedSSPs'
  import TableSSPDriver from '~/components/TableSSPDriver'
  import IntersectionObserver from 'library/src/components/IntersectionObserver'
  import SensesMeta from 'library/src/components/SensesMeta.vue'
  import ButtonChange from '~/components/Button-Change'

  export default {
    components: {
      IntersectionObserver,
      ChartVision,
      ChartChange,
      SensesMeta,
      ExtendedSSPs,
      ButtonChange,
      TableSSPDriver,
      ChartTimes,
      BoxChange
    },
    computed: {
      ...mapState('time', [
        'ssp'
      ])
    },
    methods: {
      ...mapActions('step', [
        'setStep'
      ]),
      ...mapActions('time', [
        'setSSP'
      ])
    },
    mounted () {
      this.$on('step', (step) => {
        this.setSSP(`SSP${step}`)
        // this.setStep(step)
      })
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

    .wildcards {
      grid-column-start: 1;
      grid-column-end: 6;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 4rem;
    }

    .wildcard {
      @include box();

      & > * {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1rem;

        .content {
          grid-column-start: 2;
          grid-column-end: 4;
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

      &.graphic--wildcards {
        // grid-row-start: 1;
        grid-column-start: 4;
        grid-column-end: 6;
        position: sticky;
        // top: 60px;
        display: block;
        grid-row-end: span 3;
      }
    }

    .questionnaire {
      margin-top: 10vh;

      .questions {
        list-style: none;
      }
    }
  }

  table.style {
    td, th {
      vertical-align: top;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    thead {
      padding-bottom: 5px;

      th {
        @include text-table-1();
        border-bottom: 1px solid $color-light-gray;
        padding-bottom: 0.5rem;

        &:first-child {
          @include text-table-2();
        }
      }
    }

    tbody {
      tr:first-child {
        td {
          padding-top: 0.5rem;
        }
      }

      tr {
        td {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid $color-pale-gray;
          @include text-table-2();

          &:first-child, &.first {
            @include text-table-1();
            font-weight: bold;
            max-width: 20vw;
          }

          ul {
            li {
              margin-bottom: 0.5rem;
            }
          }
        }

        &:first-child td {
          // background-color: red;
          border-radius: 5px 5px 0 0;
        }

        &:last-child td {
          // background-color: red;
          border-radius: 0 0 5px 5px;
        }
      }

      tr:last-child {
        td {
          border: 0;
        }
      }
    }
  }

  td[colspan="4"] {
    text-align: center;
  }

  td[rowspan="2"] {
    text-align: center;

    // &:first-child {
    //   padding-right: 2rem;
    // }

    // &:last-child {
    //   padding-left: 2rem;
    // }

    span {
      writing-mode: vertical-lr;
      transform: rotate(-180deg);
    }
  }

  td.stack {
    padding: 2rem;
    div {
      display: grid;
      grid-auto-flow: row;
    }

    &.reverse {
      div {
        flex-direction: column-reverse;
      }
    }
  }
</style>
