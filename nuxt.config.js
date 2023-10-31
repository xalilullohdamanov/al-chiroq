// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css:[
    '~/assets/css/main.css'
  ],
  
  modules: [
    // [
    //   '@nuxtjs/yandex-metrika',
    //   {
    //     id: '93610741',
    //     clickmap: true,
    //     trackLinks: true,
    //     accurateTrackBounce: true,
    //     webvisor: true
    //   }
    // ],
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    // https://go.nuxtjs.dev/content
    '@nuxtjs/i18n',
  ],
  
  i18n:{
    vueI18n: "./assets/lang/index.js"
  }
})

