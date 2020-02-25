<template>
  <v-content>

    <section>
      <v-parallax :src="$vuetify.breakpoint.smAndDown?'/train.jpg':'/train.gif'" height="800">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="mb-2 display-4 text-center">AGROPORT TRADE</h1>
          <div class="subheading display-2 mb-4 text-center">Інформаційно-торгова платформа, що полегшує внутрішню та міжнародну купівлю та продаж сільськогосподарських товарів</div>
          <v-btn
            class="mt-12"
            color="orange lighten-2"
            x-large
            href="/pre-made-themes"
          >Розпочнемо?</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">Онлайн-торгівля</h2>
            <span class="subheading">це реальна можливість збільшити прибутковість як для покупців, так і для продавців</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="75" class="green--text text--lighten-2">mdi-account-cash</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Онлайн-торги підтвердженими об’ємами</div>
                  </v-card-title>
                  <v-card-text>
                    Торги проходять між перевіреними й авторизованими контрагентами за наявності складських квитанцій (документів) або банківської гарантії
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="75" class="red--text text--lighten-2">mdi-charity</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Індекси цін</div>
                  </v-card-title>
                  <v-card-text>
                    Система формує середній по країні / регіону індекс цін основних агрокультур в місцевій валюті грунтуючись на внутрішньому алгоритмі.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="75" class="orange--text text--lighten-2">mdi-barley</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Автоматичний документообіг</div>
                  </v-card-title>
                  <v-card-text>
                    За угодами в онлайн-торгах відбувається автоматичне формування пакета документів, необхідного для завершення угоди. Система формує до 12 шаблонів документів
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="/maxresdefault.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">Презентації в регіонах</div>
          <em>В рамках регіональних форумів з розвитку фермерства Агропорт</em>
          <v-btn
            class="mt-12"
            color="black lighten-2"
            dark
            large
            href="https://agroport.ua"
          >Календар заходів</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout row wrap justify-center class="my-12">
        <v-flex xs12 md4>
          <form>
            <v-text-field
              :counter="10"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              label="E-mail" required></v-text-field>
            <v-text-field
              :counter="10"
              label="Phone"
              required
            ></v-text-field>
            <v-text-field
              :counter="10"
              label="Password"
              required
            ></v-text-field>

            <v-checkbox
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </form>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="380">
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4>
            <v-card flat class="transparent white--text">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">AGROPORT Ukraine</div>
              </v-card-title>
              <v-card-text class="white--text">
                Бізнес-екосистема з розвитку фермерства в Україні, що починаючи з 2014 року об'єднує кращі аграрні практики на Заході, Сході та Півдні країни.
              </v-card-text>
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
                    <v-list-item-title>(+38 050) 301-88-55</v-list-item-title>
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
      </v-parallax>
    </section>

  </v-content>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      title: "123"
    };
  },
  methods: {}
};
</script>
