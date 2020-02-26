<template>
    <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">Онлайн-торгівля</h2>
            <span
              class="subheading"
            >це реальна можливість збільшити прибутковість як для покупців, так і для продавців</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="75" class="green--text text--lighten-2">mdi-account-check</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Онлайн-торги підтвердженими об’ємами</div>
                  </v-card-title>
                  <v-card-text>Торги проходять між перевіреними й авторизованими контрагентами за наявності складських квитанцій (документів) або банківської гарантії</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="75" class="blue--text text--lighten-2">mdi-finance</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <a href="https://agroxy.com/statistic" class="headline">Індекси цін</a>
                  </v-card-title>
                  <v-card-text>Система формує середній по країні / регіону індекс цін основних агрокультур в місцевій валюті грунтуючись на внутрішньому алгоритмі.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon
                      size="75"
                      class="orange--text text--lighten-2"
                    >mdi-file-document-edit-outline</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Автоматичний документообіг</div>
                  </v-card-title>
                  <v-card-text>За угодами в онлайн-торгах відбувається автоматичне формування пакета документів, необхідного для завершення угоди. Система формує до 12 шаблонів документів</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
</template>