export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'semantig-landing',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/uui0gpn.css', async: true }
    ],
    script: [
      {
        src: "https://cdn-cookieyes.com/client_data/b8a702ea7c51691f1f4ff540/script.js",
        hid: "cookieyes",
        type: "text/javascript",
        async: true
      },
      // Google Analytics Code
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-68X7CK2X13",
        async: true,
      },
      {
        src: '/js/ga.js',
        async: true,
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    'nuxt-facebook-pixel-module',
    ['@netsells/nuxt-hotjar', {
      id: '3507242',
      sv: '6',
    }],
  ],

  facebook: {
    pixelId: '107580149016827',
    autoPageView: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
