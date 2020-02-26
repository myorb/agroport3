<template>
  <v-layout row no-gutters wrap justify-center class="my-12">
    <v-flex xs12 md4 ml-5 mr-5>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Ім'я" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="phone" :counter="10" :rules="phoneRules" label="Телефон" required></v-text-field>

        <v-checkbox
          v-model="checkbox"
          label="Згоден на обробку даних"
          :rules="[v => !!v || 'You must agree to continue!']"
          required
        >
          <!--@change="$v.checkbox.$touch()"-->
          <!--@blur="$v.checkbox.$touch()"-->
        </v-checkbox>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Зареєструватися</v-btn>
      </v-form>
    </v-flex>
    <v-snackbar v-model="snackbar" color="success" timeout="15000" :multi-line="true">
      <h1>Дякуємо за вашу реєстрацію, ми незабаром надішлемо на вашу електронну адресу лист з подальшими інструкціями</h1>
      <v-btn text @click="snackbar = false">
        <v-icon size="35" class="orange--text">mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      snackbar: false,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Введіть ваше ім'я",
        v =>
          (v && v.length <= 10) || "Ім'я не повинно бути довшим за 10 символів"
      ],
      email: "",
      emailRules: [
        v => !!v || "Введіть ваш E-mail",
        v =>
          /.+@.+\..+/.test(v) ||
          "Перевірте правильність написання вашого E-mail"
      ],
      phone: "",
      phoneRules: [
        v => !!v || "Введіть ваш номер телефону",
        v =>
          (v && v.length == 10) || "Номер телефона повинен складатися з 10 цифр"
      ],
      checkbox: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>