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
  dir: {
    pages: 'src/pages',
    layouts: 'src/layouts'
  },
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
        '@shared': '/src/FSD/shared',
        '@pages': '/src/FSD/pages',
        '@widgets': '/src/FSD/widgets',
        '@features': '/src/FSD/features',
        '@entities': '/src/FSD/entities',
        '@app': '/src/FSD/app'
      }
    }
  },
  typescript: {
    strict: false,
    typeCheck: false
  },
  build: {
    transpile: ['pinia']
  }
})
