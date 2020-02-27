import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  server: {
    port: 80, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  serverMiddleware: [
    // "~/api/logger",
    // { path: "/api", handler: "~/api/index.js" }
  ],
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s",
    title: process.env.npm_package_name || "agroport trade system",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "agroport, agroxy, trade" },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "agroport and agroxy trade platform"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-99020570-4"
      }
    ],
    "@nuxtjs/vuetify"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // prefix: "/api/",
    // proxy: true
  },

  // proxy: {
  //   "/api": {
  //     target: process.env.SECRET_API_URL,
  //     pathRewrite: { "^/api/": "" },
  //     logLevel: "debug"
  //   }
  // },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken1,
          secondary: colors.blue.lighten4,
          accent: colors.indigo.base
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
