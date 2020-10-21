<template>
  <figure class="graphic graphic--wide">
    <span class="rcp rcp60">Medium/high-end climate change (RCP 6.0)</span>
    <span class="rcp rcp26">Low-end climate change (RCP2.6)</span>
    <span class="col lowcol">Low-level regional collaboration</span>
    <span class="col highcol">High-level regional collaboration</span>
    <figure class="ssp ssp3" v-tooltip="{ offset: 5, content: 'Regional rivalry is a scenario where Kenya cooperates with neighbouring countries around the common interests and aim to compete against other regional blocs. However, growing nationalist values and intense competition over the scarce resources intensify the rivalry and securitize the relationships between the EAC countries. Access to the technological innovations becomes extremely difficult for Kenya because knowledge sharing practices are securitized, and innovations are strictly patented and expensive.' }">
      <figcaption class="caption">Extended SSP3: Regional rivalry</figcaption>
      <img src="img/Regional rivalry-s.jpg" />
    </figure>
    <figure class="ssp ssp5" v-tooltip="{ offset: 5, content: 'Fossil-fuelled development is a scenario where regional collaboration in EAC increases with a focus on economic growth and increasing competitiveness in global market. Kenya and neighbours agree on the maximum use of the shared natural resources, but environmental policies including, climate adaptation are not priorities. As a result, climate-induced border conflicts decrease.' }">
      <figcaption class="caption">Extended SSP5: Fossil fueled development</figcaption>
      <img src="img/Fossil fueled development_s.jpg" />
    </figure>
    <figure class="ssp ssp4" v-tooltip="{ offset: 5, content: 'Inequality is a scenario where regional collaboration in the EAC is fragmented and unstable. While Kenya attempts to maintain collaboration, traditional values upsurge in the region leading the neighbouring countries to enhance militarization and securitized societies. Kenya – like most low-income countries – is struggling to provide the minimum life capacity for the poor majority of the population.' }">
      <figcaption class="caption">Extended SSP4: Inequality</figcaption>
      <img src="img/Inequality-s.jpg" />
    </figure>
    <figure class="ssp ssp1" v-tooltip="{ offset: 5, content: 'Sustainability is a scenario where regional collaborations towards sustainable development improves within the east African community. Collaborations on natural resource management between Kenya and neighbouring countries ensure preservation and sustainable use of resources and make progress toward resolving cross border conflicts over access to and use of shared resources, especially transboundary water. Clean energy is accessible for a larger share of Kenyan population.' }">
      <figcaption class="caption">Extended SSP1: Sustainability</figcaption>
      <img src="img/Sustainability-s.jpg" />
    </figure>
    <figcaption class="cap figcaption">
      Figure 3. Extended SSPs across climate change and regional collaboration axes. The visualizations were developed by Leti Arts (www.letiarts.com)
    </figcaption>
  </figure>
</template>

<script>
export default {}
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
      writing-mode: vertical-lr;
      transform: rotate(-180deg);
      text-align: center;
      font-weight: bold;
    }

    .rcp {
      text-align: center;
      font-weight: bold;
    }

    .ssp {
      display: flex;
      flex-direction: column;

      &.ssp4, &.ssp1 {
        flex-direction: column-reverse;
      }

      &.ssp5, &.ssp1 {
        text-align: right;
      }
    }
  }

  .caption {
    margin-top: 0.2em;
  }

</style>
