/**
 * created by SD
 *  2022.06.08 ~
 */

const LOCAL_API = 'localhost:8000'
const LOCAL_ORIGIN = 'localhost:3000'

const ORIGIN = process.env.ORIGIN ? process.env.ORIGIN : LOCAL_ORIGIN
const API_HOST = process.env.API_HOST ? process.env.API_HOST : LOCAL_API

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
      host: process.env.NUXT_HOST,
      port: process.env.NUXT_PORT
  },
  script: {
      dev: 'localhost PORT=3000 nuxt'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  io: {
      cors: {
        origin: ORIGIN
      }
  },
  axios: {
      baseURL: API_HOST,
    proxy: true
  },
  proxy : {
    'api/' : { target: `${API_HOST}`, changeOrigin: true }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  styleResources: {
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
