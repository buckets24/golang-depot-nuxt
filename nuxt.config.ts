import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/supabase'
  ],
  buildModules: [
    // https://github.com/nuxt-community/supabase-module
    '@nuxtjs/supabase',
  ],
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  publicRuntimeConfig: {
    SUPABASE_IMAGE_PATH: process.env.SUPABASE_IMAGE_PATH
  },
})
