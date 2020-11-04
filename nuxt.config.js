
export default {
  mode: 'spa',
  head: {
    title: 'Co-producing adaptation options to address future cross-border climate impacts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'In this module, we show how co-production techniques can be applied to developing socioeconomic scenarios and adaptation options and strategies in sub-global impact, adaptation, and vulnerability studies.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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
