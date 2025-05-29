// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'

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
  vite: {
    plugins: [
      tsconfigPaths()
    ],
    resolve: {
      alias: {
        '@': '/src',
        '@shared': '/src/shared',
        '@pages': '/src/pages',
        '@widgets': '/src/widgets',
        '@features': '/src/features',
        '@entities': '/src/entities',
        '@app': '/src/app'
      }
    }
  }
})
