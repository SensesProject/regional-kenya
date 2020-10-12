
export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
