<template>
  <v-app light>
    <v-toolbar style="background: linear-gradient(to right, #e19470, #b2fafd);">
      <router-link to="/">
        <v-img class="mr-3" src="/output-onlinepngtools3.png" height="100px" width="240px"></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>Login</v-btn>
        <v-btn text>Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <nuxt />

    <v-footer fixed="fixed" app>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="float-right ml-4">
              Made with
              <v-icon class="red--text">mdi-heart</v-icon>
              <a
                href="https://agroxy.com"
                target="_blank"
              >by Agroxy</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </v-app>
</template>
