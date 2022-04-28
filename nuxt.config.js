export default {
  // Export vars from env: https://nuxtjs.org/docs/directory-structure/nuxt-config#runtimeconfig
  env: {
    baseURL: process.env.NODE_ENV !== 'production' ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD,
  },

  // Routes middleware: https://nuxtjs.org/examples/middlewares/router#router-middleware
  router: {
    middleware: ['auth']
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Amploo',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-api-query.js',
    '@/plugins/vue-tabler-icons.js',
    '@/plugins/vue-formulate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Nuxt axios options: https://axios.nuxtjs.org/options
  axios: {
    baseURL: process.env.NODE_ENV !== 'production' ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD,
    credentials: true,
  },


  // Nuxt auth sanctum: https://auth.nuxtjs.org/providers/laravel-sanctum
  auth: {
    localStorage: false,
    redirect: {
      login: '/auth/login',
      home: '/',
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.NODE_ENV !== 'production' ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD,
        endpoints: {
          login: { url: '/auth/login'  },
          logout: { url: '/auth/logout' },
          user: { url: '/api/auth/user' }
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Tailwind css options: https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
  },

  // Off loading: https://nuxtjs.org/docs/features/loading/#disable-the-progress-bar
  loading: false,
}
