<template>
  <v-content>
    <section>
      <v-parallax src="/agroxy.png" height="800">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="mb-2 text-center section1-title">AGROPORT TRADE</h1>
          <div
            class="subheading mb-4 text-center section1-content"
          >Інформаційно-торгова платформа, що полегшує внутрішню та міжнародну купівлю та продаж сільськогосподарських товарів</div>
          <v-btn class="mt-12" color="white lighten-2" x-large @click="$vuetify.goTo('#form')">
            <span class="pa-3">Розпочнемо</span>
            <v-icon size="35" class="green--text text--lighten-2">mdi-crosshairs-question</v-icon>
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
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

    <section id="form">
      <Form />
    </section>

    <section>
      <CompanyInfo />
    </section>
  </v-content>
</template>

<script>
import Form from "~/components/Form.vue";
import CompanyInfo from "~/components/CompanyInfo.vue";

export default {
  components: {
    Form,
    CompanyInfo
  },
  data() {
    return {
      title: "123"
    };
  }
};
</script>


<style>
.section1-title {
  font-size: 96px;
  font-weight: 800;
}
.section1-content {
  font-size: 36px;
}
@media (max-width: 992px) {
  .section1-title {
    font-size: 48px;
  }
  .section1-content {
    font-size: 24px;
  }
}
@media (max-width: 576px) {
  .section1-title {
    font-size: 36px;
  }
  .section1-content {
    font-size: 18px;
  }
}
</style>
