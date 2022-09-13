<template>
  <v-app>
    <v-container class="mt-16">
      <v-card class="pa-4">
        <v-row>
          <v-col cols="12" md="6">
            <v-card-text>
              <p class="font-weight-bold display-1">Hubungi Kami</p>
              <v-divider
                class="success pa-1 rounded-pill"
                style="width: 10%"
              ></v-divider>
              <p class="subtitle-1 mt-4">
                Jangan ragu menghubungi kami jika anda ingin mengetahui lebih
                jelas produk kami.
              </p>
              <form>
                <v-text-field
                  color="success"
                  outlined
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="20"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  color="success"
                  outlined
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-textarea
                  color="success"
                  outlined
                  v-model="message"
                  :error-messages="messageErrors"
                  label="Message"
                  required
                  @change="$v.message.$touch()"
                  @blur="$v.message.$touch()"
                ></v-textarea>

                <v-btn
                  rounded
                  class="success pt-6 pb-6 pl-12 pr-12"
                  @click="submit"
                >
                  submit
                </v-btn>
              </form>
            </v-card-text>
          </v-col>
          <v-col cols="12" md="6" class="success"></v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "contact-us",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    message: { required },
  },

  data: () => ({
    name: "",
    email: "",
    message: "",
  }),

  computed: {
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.required && errors.push("Pesan tidak boleh kosong!");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Nama tidak boleh lebih dari 20 karakter");
      !this.$v.name.required && errors.push("Nama tidak boleh kosong!");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail tidak boleh kosong!");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>

<style>
</style>