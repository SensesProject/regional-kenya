<template>
  <figure class="graphic layout--wide">
    <span class="rcp rcp60">Medium/high-end climate change (RCP 6.0)</span>
    <span class="rcp rcp26">Low-end climate change (RCP2.6)</span>
    <span class="col lowcol">Low-level regional collaboration</span>
    <span class="col highcol">High-level regional collaboration</span>
    <figure
      v-for="({ ssp, img, tooltip, caption }) in elements"
      :class="[
        'ssp',
        `ssp${ssp}`,
        {
          hasActive: active,
          isActive: active === ssp
        }
      ]"
      @mouseover="() => hoverSSP(ssp)"
      @mouseleave="leaveSSP"
      v-tooltip="{ offset: 5, content: tooltip }">
      <figcaption class="caption">{{ caption }}</figcaption>
      <img :src="`img/${ssp}.jpg`" />
    </figure>
    <figcaption class="cap figcaption">
      Figure 1. Extended SSPs across climate change and regional collaboration axes. The visualizations were developed by <a href="http://www.letiarts.com/" target="_blank">Leti Arts</a>.
    </figcaption>
  </figure>
</template>

<script>
export default {
  data () {
    return {
      active: null
    }
  },
  computed: {
    elements () {
      return [{
        caption: 'Extended SSP3: Regional rivalry',
        ssp: 3,
        tooltip: '<em>Regional</em> rivalry is a scenario where Kenya cooperates with neighbouring countries around the common interests and aim to compete against other regional blocs. However, growing nationalist values and intense competition over the scarce resources intensify the rivalry and securitize the relationships between the EAC countries. Access to the technological innovations becomes extremely difficult for Kenya because knowledge sharing practices are securitized, and innovations are strictly patented and expensive.'
      }, {
        caption: 'Extended SSP5: Fossil fueled development',
        ssp: 5,
        tooltip: '<em>Fossil-fuelled development</em> is a scenario where regional collaboration in EAC increases with a focus on economic growth and increasing competitiveness in global market. Kenya and neighbours agree on the maximum use of the shared natural resources, but environmental policies including, climate adaptation are not priorities. As a result, climate-induced border conflicts decrease.'
      }, {
        caption: 'Extended SSP4: Inequality',
        ssp: 4,
        tooltip: '<em>Inequality</em> is a scenario where regional collaboration in the EAC is fragmented and unstable. While Kenya attempts to maintain collaboration, traditional values upsurge in the region leading the neighbouring countries to enhance militarization and securitized societies. Kenya – like most low-income countries – is struggling to provide the minimum life capacity for the poor majority of the population. '
      }, {
        caption: 'Extended SSP1: Sustainability',
        ssp: 1,
        tooltip: '<em>Sustainability</em> is a scenario where regional collaborations towards sustainable development improves within the east African community. Collaborations on natural resource management between Kenya and neighbouring countries ensure preservation and sustainable use of resources and make progress toward resolving cross border conflicts over access to and use of shared resources, especially transboundary water. Clean energy is accessible for a larger share of Kenyan population.'
      }]
    }
  },
  methods: {
    hoverSSP (ssp) {
      this.active = ssp
    },
    leaveSSP () {
      this.active = null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic {
    display: grid;
    grid-template-columns: auto 1fr 1fr auto;
    grid-template-rows: auto 1fr 1fr auto auto;
    grid-template-areas:
      "rcp60 rcp60 rcp60 rcp60"
      "lowcol ssp3 ssp5 highcol"
      "lowcol ssp4 ssp1 highcol"
      "rcp26 rcp26 rcp26 rcp26"
      "cap cap cap cap";

    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    .cap { grid-area: cap; }

    .ssp1 { grid-area: ssp1; }
    .ssp3 { grid-area: ssp3; }
    .ssp4 { grid-area: ssp4; }
    .ssp5 { grid-area: ssp5; }

    .rcp60 { grid-area: rcp60; }
    .rcp26 { grid-area: rcp26; }

    .lowcol { grid-area: lowcol; }
    .highcol { grid-area: highcol; }

    .col {
      @include headline-graphic();
      writing-mode: vertical-lr;
      transform: rotate(-180deg);
      text-align: center;
    }

    .rcp {
      @include headline-graphic();
      text-align: center;
    }

    .ssp {
      display: flex;
      flex-direction: column;
      transition: opacity $transition;

      &.hasActive:not(.isActive) {
        opacity: 0.7;
      }

      &.ssp4, &.ssp1 {
        flex-direction: column-reverse;
      }

      &.ssp5, &.ssp1 {
        text-align: right;
      }
    }

    img {
      width: 100%;
    }
  }

  .caption {
    margin-top: 0.2em;
  }

</style>
