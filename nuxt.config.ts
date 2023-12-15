// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css']
})
