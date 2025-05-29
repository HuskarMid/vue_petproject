// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: '/vue-petproject/'
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  alias: {
    '@': '/src',
    '@shared': '/src/shared',
    '@pages': '/src/pages',
    '@widgets': '/src/widgets',
    '@features': '/src/features',
    '@entities': '/src/entities',
    '@app': '/src/app'
  },
})
