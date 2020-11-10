const { getHead } = require('library/src/assets/js/head.js')

export default {
  mode: 'spa',
  head: getHead({
    title: 'Co-producing adaptation options to address future cross-border climate impacts',
    description: 'In this module, we show how co-production techniques can be applied to developing socio-economic scenarios and adaptation options and strategies in sub-global impact, adaptation, and vulnerability studies. We demonstrate this process in a case study focused on Kenya.',
    image: 'https://climatescenarios.org/share/og-kenya.jpg'
  }),
  loading: { color: '#fff' },
  css: [
    '@/assets/style/base.scss'
  ],
  router: {
    base: '/kenya/'
  },
  resolve: {
    alias: {
      style: 'assets/style'
    }
  },
  build: {
    extend (config, ctx) {
    }
  }
}
