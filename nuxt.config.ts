/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-03-31 17:11:36
 * @LastEditTime: 2023-04-03 17:16:39
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtjs-touxiang\nuxt.config.ts
 */
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
  runtimeConfig: {
    AFD_user_id: "",
    AFD_api_token: "",
  },
});
