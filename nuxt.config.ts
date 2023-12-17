// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineEnv } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-vuefire'
  ],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
  // MAKE THIS .ENV https://vuefire.vuejs.org/nuxt/getting-started.html
  vuefire: {
    config: {
      apiKey: process.env.VUEFIRE_PROJECT_KEY,
      authDomain: process.env.VUEFIRE_PROJECT_DOMAIN,
      projectId: process.env.VUEFIRE_PROJECT_ID,
      appId: process.env.VUEFIRE_PROJECT_APPID,
    },
    auth: {
      enabled: true
    }
  },
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css']
})
