import config from './json/config.json'
console.log(config)
  
const generateRoutes = async () => {
  const { $content } = require('@nuxt/content')
  let objects = await $content('objects').sortBy('title').fetch()
  let articles = await $content('articles').sortBy('title').fetch()
  return objects.concat(articles).map(file => file.path === '/index' ? '/' : file.path)
}

export default {
  mode: 'static',
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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  robots: [
    {
			UserAgent: '*',
			Disallow: ''
    },
    {
      UserAgent: '*',
      Allow: '/'
    },
		{
			Sitemap: config.url + '/sitemap.xml'
		}
  ],
  sitemap: {
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    path: '/sitemap.xml',
    hostname: config.url,
    gzip: true,
    generate: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: generateRoutes
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  generate: {
    routes: generateRoutes
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
