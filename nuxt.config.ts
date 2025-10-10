// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    [
      "@nuxtjs/eslint-module",
      {
        /* module options */
      },
    ],
  ],
  css: ["~/assets/styles/main.scss"],

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
  },
});
