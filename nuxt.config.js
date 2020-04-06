
export default {
  mode: 'universal',
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'layouts/error.vue')
      })
    },
  },
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
    '~assets/scss/main.scss',
  ],
   pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  plugins: [
  ],
  buildModules: [
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  generate: {
    fallback: true,
  },
  build: {
    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [require.resolve('@nuxt/babel-preset-app'), { targets }]
        ]
      }
    },
    postcss: {
      plugins: {
      },
      preset: {
        autoprefixer: {
          grid: true,
          flex: true
        }
      }
    },
    extend(config, ctx) {
      /* config.module.rules.push({
        test: /\.scss$/,
        use: ["sass-loader", "postcss-loader"]
      }); */
    }
  }
}
