export default {
  loading: '~/components/LoadingBar.vue',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'catalog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {src:'@/assets/scss/main.scss'},
   
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src:'~/plugins/vuetify.js',mode:'client'},
    { src: "~/plugins/vue-swiper.js",  mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    'nuxtjs-mdi-font'
  ],

  axios: {
    proxy: true
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
