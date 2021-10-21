import config from './json/config.json'
console.log(config)
const isDev = process.env.NODE_ENV !== 'production'
  
const generateRoutes = async () => {
  const { $content } = require('@nuxt/content')
  
  let objects = await $content('ru', 'objects').sortBy('title').fetch()
  let mapObjects = objects.map(file => '/objects/' + file.path_nuxt)
  
  let articles = await $content('ru', 'articles').sortBy('title').fetch()
  let mapArticles = articles.map(file => '/articles/' + file.path_nuxt)

  let services = await $content('ru', 'services').sortBy('title').fetch()
  let mapServices = services.map(file => '/services/' + file.path_nuxt)
  return mapObjects.concat(mapArticles, mapServices)
}

export default {
  target: 'static',
	components: true,
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
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/yandex-metrika',
    '@nuxtjs/google-gtag',
  ],
  content: {
    liveEdit: false,
    fullTextSearchFields: ['title', 'path_nuxt', 'path']
  },  
  yandexMetrika: {
    id: config.metrica,
    webvisor: true,
    clickmap:true,
    useCDN:true,
    trackLinks:true,
    accurateTrackBounce:true,
  },
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
      lastmod: new Date()
    },
    path: '/sitemap.xml',
    hostname: config.url,
    gzip: true,
    generate: true,
    trailingSlash: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: generateRoutes
  },
  axios: {
  },
  "google-gtag": {
		id: 'G-DRS0Y64P6W',
		config: {
			'accept_incoming': true,
			'decorate_forms': true,
			'send_page_view': false,
			'cookie_domain': 'auto'
		},
		debug: !isDev,
	},
  generate: {
    cache: false,
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
