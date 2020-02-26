<template>
  <v-content>

    <section>
      <v-parallax :src="$vuetify.breakpoint.smAndDown?'/train.jpg':'/train.gif'" height="800">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="mb-2 text-center section1-title">AGROPORT TRADE</h1>
          <div class="subheading mb-4 text-center section1-content">Інформаційно-торгова платформа, що полегшує внутрішню та міжнародну купівлю та продаж сільськогосподарських товарів</div>
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
                    <v-icon size="75" class="green--text text--lighten-2">mdi-account-check</v-icon>
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
                    <v-icon size="75" class="blue--text text--lighten-2">mdi-finance</v-icon>
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
                    <v-icon size="75" class="orange--text text--lighten-2">mdi-file-document-edit-outline</v-icon>
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
      <v-layout row no-gutters wrap justify-center class="my-12">
        <v-flex xs12 md4 ml-5 mr-5>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Ім'я"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="phone"
              :counter="10"
              :rules="phoneRules"
              label="Телефон"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :counter="6"
              :rules="passwordRules"
              label="Пароль"
              required
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              label="Згоден на обробку даних"
              :rules="[v => !!v || 'You must agree to continue!']"
              required
            >
              <!--@change="$v.checkbox.$touch()"-->
              <!--@blur="$v.checkbox.$touch()"-->
            </v-checkbox>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Зареєструватися
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </section>

    <section>
        <v-layout row no-gutters wrap justify-center class="py-12" style="background: linear-gradient(to right,  orange, yellow);">
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
    </section>

  </v-content>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      title: "123",
      valid: true,
      name: '',
      nameRules: [
        v => !!v || "Введіть ваше ім'я",
        v => (v && v.length <= 10) || "Ім'я не повинно бути довшим за 10 символів",
      ],
      email: '',
      emailRules: [
        v => !!v || 'Введіть ваш E-mail',
        v => /.+@.+\..+/.test(v) || 'Перевірте правильність написання вашого E-mail',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Введіть ваш номер телефону',
        v => (v && v.length == 10) || 'Номер телефона повинен складатися з 10 цифр',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Введіть пароль',
        v => (v && v.length >= 6) || 'Пароль повинен бути довшим за 6 символів',
      ],
      checkbox: false,
    };
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
  },
};
</script>


<style>
  .section1-title {
    font-size:96px;
    font-weight: 800
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
