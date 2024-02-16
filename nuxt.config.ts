import { NuxtPage } from 'nuxt/schema'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir:'src/',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: false,

  app: {
    head: {
      title: 'Twitter',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
    },
  },

  hooks: {
    'pages:extend'(pages) {
      // add a route
      pages.push({
        name: 'home',
        path: '/',
        file: '~/pages/auth/login',
      })

      // console.log(pages)
      function acceptPagesMatching(pages: NuxtPage[] = []) {
        const pagesToRemove = []
        for (const page of pages) {
          if (page.path.includes('components')) {
            pagesToRemove.push(page)
          } else {
            acceptPagesMatching(page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }

        // console.log('accept Pages ', pagesToRemove)
      }
      acceptPagesMatching(pages)
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  components: [
    {
      path: '@/components/ui',
      pathPrefix: false,
    },
    { path: '@/components/partials', pathPrefix: false },
  ],

  css: ['@/styles/main.scss'],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  // third party librarys setup configuration
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
