<template>
  <section class="graphic graphic--wide">
    <table class="style">
      <thead>
        <tr>
          <th>Key drivers \ SSPs</th>
          <th>SSP1: sustainability</th>
          <th>SSP3: regional rivalry</th>
          <th>SSP4: inequality</th>
          <th>SSP5: fossil fuelled development</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Cell>Shared natural resources</Cell>
          <Cell ssp="1" v-tooltip="{ content: 'This forms the extended SSP 1', trigger: 'manual', show: essp == 1, offset: 5, classes: 'blue' }">Collaborative management of shared natural resources</Cell>
          <Cell ssp="3" v-tooltip="{ content: 'This forms the extended SSP 3', trigger: 'manual', show: essp == 3, offset: 5, classes: 'blue' }">Isolated planning for the use of shared natural resources</Cell>
          <Cell ssp="4" v-tooltip="{ content: 'This forms the extended SSP 4', trigger: 'manual', show: essp == 4, offset: 5, classes: 'blue' }">Some countries use the shared natural resources more than other shareholders (high disparities)</Cell>
          <Cell ssp="5" v-tooltip="{ content: 'This forms the extended SSP 5', trigger: 'manual', show: essp == 5, offset: 5, classes: 'blue' }">Increased use and harvest of natural resources</Cell>
        </tr>
        <tr>
          <Cell>Technology transfer</Cell>
          <Cell ssp="1">Increased use of green tech and renewables</Cell>
          <Cell ssp="3">Investments in research and knowledge creation in local and national institutions, and high costs of access to knowledge</Cell>
          <Cell ssp="4">Increased capacity gap btw high- and low-income to access knowledge and technology</Cell>
          <Cell ssp="5">Advanced exploration and development of fossil fuel technologies</Cell>
        </tr>
        <tr>
          <Cell>Knowledge management systems</Cell>
          <Cell ssp="1">Increased research on enhanced governance and robust information systems</Cell>
          <Cell ssp="3">Poor knowledge sharing practices internationally and externally, and increased knowledge gaps</Cell>
          <Cell ssp="4">Disparities in access and contribution to knowledge creation</Cell>
          <Cell ssp="5">Increased research on fossil fuel-based development and infrastructures (roads, ports, etc.)</Cell>
        </tr>
        <tr>
          <Cell>Policy implementation</Cell>
          <Cell ssp="1">Effective implementation of sustainability policies</Cell>
          <Cell ssp="3">Poor attention to regional and global policies and increased attention to national and local policies</Cell>
          <Cell ssp="4">Disparities in policy implementation between countries</Cell>
          <Cell ssp="5">Strong policies on economic development but weak in sustainability</Cell>
        </tr>
        <tr>
          <Cell>Import of food</Cell>
          <Cell ssp="1">Slightly decreases</Cell>
          <Cell ssp="3">Decreases for trans-continental, and increases from neighbouring countries</Cell>
          <Cell ssp="4">Maintains steady, while rich benefits from imports, and masses do not</Cell>
          <Cell ssp="5">Strong increases in short- and medium term, and stabilising in longer run</Cell>
        </tr>
        <tr>
          <Cell>Regional collaboration</Cell>
          <Cell ssp="1">Increases and improves</Cell>
          <Cell ssp="3">Some collaboration in short-term, but as rivalry increases, collaboration decreases</Cell>
          <Cell ssp="4">Elite minorities collaborate, and regional blocs try to unite</Cell>
          <Cell ssp="5">Increases</Cell>
        </tr>
        <tr>
          <Cell>Population</Cell>
          <Cell ssp="1">Slightly decrease</Cell>
          <Cell ssp="3">Continues growing</Cell>
          <Cell ssp="4">Continues growing</Cell>
          <Cell ssp="5">Slightly decreases</Cell>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Cell from '~/components/TableSSPDriver-Cell'

export default {
  components: {
    Cell
  },
   computed: {
    ...mapState('table', [
      'essp'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
