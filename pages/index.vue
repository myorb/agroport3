<template>
  <v-content>
    <section>
      <v-parallax src="/agroxy.png" height="800">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="mb-2 text-center section1-title">AGROPORT TRADE</h1>
          <div class="subheading mb-4 text-center section1-content">
            Інформаційно-торгова платформа, що полегшує внутрішню та міжнародну
            купівлю та продаж сільськогосподарських товарів
          </div>
          <v-btn
            class="mt-12"
            color="white lighten-2"
            x-large
            @click="$vuetify.goTo('#form')"
          >
            <span class="pa-3">Розпочнемо</span>
            <v-icon size="35" class="green--text text--lighten-2"
              >mdi-crosshairs-question</v-icon
            >
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <Usp />
    </section>

    <section>
      <v-parallax src="/maxresdefault.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">
            Презентації в регіонах
          </div>
          <em>В рамках регіональних форумів з розвитку фермерства Агропорт</em>
          <v-btn
            class="mt-12"
            color="black lighten-2"
            dark
            large
            href="https://agroport.ua"
            >Календар заходів</v-btn
          >
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
import Usp from "~/components/Usp.vue";
import CompanyInfo from "~/components/CompanyInfo.vue";

export default {
  components: {
    Usp,
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
