<template>
  <v-layout @click="redirect" row no-gutters wrap justify-center class="my-12">
    <v-flex xs12 md4 ml-5 mr-5>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" label="Ім'я" required></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          @change="validate"
          required
        ></v-text-field>
        <v-text-field v-model="phone" :rules="phoneRules" label="Телефон" required></v-text-field>

        <v-checkbox
          v-model="checkbox"
          label="Згоден на обробку даних"
          :rules="[v => !!v || 'Ви повинні погодитися, щоб продовжити!']"
          required
        ></v-checkbox>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Зареєструватися</v-btn>
      </v-form>
    </v-flex>
    <v-snackbar v-model="snackbar" color="success" :timeout="timeout" :multi-line="true">
      <h1>
        Дякуємо {{ name }} за вашу реєстрацію, ми незабаром надішлемо на вашу
        електронну адресу лист з подальшими інструкціями
      </h1>
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
      timeout: 15000,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Введіть ваше ім'я",
        v => (v && v.length >= 3) || "Ім'я не повинно бути довшим за 3 символa"
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
          (v && v.length > 5) || "Номер телефона повинен бути довшим за 5 цифр"
      ],
      checkbox: false
    };
  },
  methods: {
    redirect() {
      this.$router.push("/signup");
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.sendRequest({
          name: this.name,
          phone: this.phone,
          email: this.email
        });
      }
    },
    async sendRequest(data) {
      try {
        const response = await this.$axios.$post("/api/newlead", data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
