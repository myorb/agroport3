<template>
  <v-app light>
    <v-toolbar style="background: linear-gradient(to right,  orange, yellow);">
      <router-link to="/">
        <v-img class="mr-1 main-icon" src="/output-onlinepngtools3.png"></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="default-btn" href="https://agroxy.com/user/sign-in/signin" text>Вхід в Агрокси</v-btn>
        <v-btn class="default-btn" @click="$vuetify.goTo('#form')" text>Реєстрація</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <nuxt />

    <v-footer fixed="fixed" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="float-right ml-4">
            Made with
            <v-icon class="red--text">mdi-heart</v-icon>
            <a href="https://agroxy.com/page/about" target="_blank">by Agroxy</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style>
.main-icon {
  height: 100px;
  width: 240px;
}
@media (max-width: 576px) {
  .main-icon {
    height: 60px;
    width: 144px;
  }
  .default-btn {
    padding-left: 8px !important;
    padding-right: 8px !important;
    font-size: 12px !important;
  }
}
</style>
