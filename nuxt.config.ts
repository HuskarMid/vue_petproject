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
    '@': '/src'
  }
})
