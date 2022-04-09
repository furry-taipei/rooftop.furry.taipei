import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    "normalize.css/normalize.css",
    "~/css/main.css",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
});
