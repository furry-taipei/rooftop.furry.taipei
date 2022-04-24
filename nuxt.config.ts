import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,

  css: [
    "normalize.css/normalize.css",
    "~/css/main.css",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
});
