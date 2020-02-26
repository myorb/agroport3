<template>
  <v-layout
    row
    no-gutters
    wrap
    justify-center
    class="py-12"
    style="background: linear-gradient(to right,  orange, yellow);"
  >
    <v-flex xs12 sm4>
      <v-card flat class="transparent white--text">
        <v-card-title primary-title class="layout justify-center">
          <div class="headline">AGROPORT Ukraine</div>
        </v-card-title>
        <v-card-text
          class="white--text"
        >Бізнес-екосистема з розвитку фермерства в Україні, що починаючи з 2014 року об'єднує кращі аграрні практики на Заході, Сході та Півдні країни.</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 offset-sm1>
      <v-card flat class="transparent">
        <v-card-title primary-title class="layout justify-center">
          <div class="headline">Контакт Центр</div>
        </v-card-title>

        <v-list class="transparent">
          <v-list-item>
            <v-list-item-action>
              <v-icon class="text--lighten-2">mdi-phone</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <a class="black--text" href="tel:+380503018855">(+38) 050 301-88-55</a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon class="text--lighten-2">mdi-map-marker</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>agroport.ua</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon class="text--lighten-2">mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>2020@agroport.ua</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>