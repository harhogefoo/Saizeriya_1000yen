import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

const title = 'サイゼリヤN円ガチャ'
const description = 'サイゼリヤN円ガチャで今日のメニュー決めよう！'


export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description }
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://saizeria-gacha.web.app/'
      },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: ''
      // },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: description
      }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    '~/plugins/repository.js',
    '~/plugins/vue-social-sharing.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fire',
      {
        useOnly: ['firestore'],
        customEnv: false,
        functionsLocation: 'us-central1',
        config: {
          development: {
            apiKey: 'AIzaSyBZlCecC5MOOHNB6og3Gvt9P9HWr_YM0gs',
            authDomain: 'saizeria-gacha.firebaseapp.com',
            databaseURL: 'https://saizeria-gacha.firebaseio.com',
            projectId: 'saizeria-gacha',
            storageBucket: 'saizeria-gacha.appspot.com',
            messagingSenderId: '1000783891679'
          },
          production: {
            apiKey: 'AIzaSyBZlCecC5MOOHNB6og3Gvt9P9HWr_YM0gs',
            authDomain: 'saizeria-gacha.firebaseapp.com',
            databaseURL: 'https://saizeria-gacha.firebaseio.com',
            projectId: 'saizeria-gacha',
            storageBucket: 'saizeria-gacha.appspot.com',
            messagingSenderId: '1000783891679'
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
