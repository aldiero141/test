<template>
  <div class="container">
    <!-- <OTP v-model="showOTP"/> -->
    <Card>
      <h1>Login</h1>
      <v-form ref="form" lazy-validation @submit.prevent="submit()">
        <v-text-field
          v-model="form.phone"
          label="Phone"
          :error-messages="phoneNumberErrorMessage"
          @blur="$v.form.phone.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          type="password"
          label="Password"
          :error-messages="passwordErrorMessage"
          @blur="$v.form.password.$touch()"
        ></v-text-field>

        <div class="d-flex mt-2 justify-end">
          <v-btn type="submit" color="green"> Login </v-btn>
        </div>
      </v-form>
      <!-- {{ error }} -->
      <!-- {{ token.access_token }} -->
    </Card>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="2000"
      style="justify-center"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import {
  required,
  //   helpers,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators'

// const phoneNumberFormat = helpers.regex(/^(\+62)8[1-9][0-9]{6,9}$/i)
export default {
  name: 'LoginPage',

  data() {
    return {
      form: {
        phone: '+62',
        password: '',
        latlong: 'test',
        device_token: 'test',
        device_type: 2,
      },
      text: '',
      snackbar: false,
      snackbarColor: '',
      // showOTP: false,
    }
  },

  validations: {
    form: {
      phone: {
        required,
        // phoneNumberFormat,
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16),
      },
    },
  },
  computed: {
    phoneNumberErrorMessage() {
      return this.$v.form.phone.$dirty && !this.$v.form.phone.required
        ? 'Phone Number is Required'
        : // : this.$v.form.phone.$dirty && !this.$v.form.phone.phoneNumberFormat ? 'Wrong phone number format'
          []
    },
    passwordErrorMessage() {
      return this.$v.form.password.$dirty && !this.$v.form.password.required
        ? 'Password is Required'
        : this.$v.form.password.$dirty && !this.$v.form.password.minLength
        ? 'Password is too short'
        : this.$v.form.password.$dirty && !this.$v.form.password.maxLength
        ? 'Password is too long'
        : []
    },
    // token() {
    //   return this.$store.state.login.token
    // },
    error() {
      return this.$store.state.login.error
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      // console.log(this.$v)
      // perform async actions
      if (!this.$v.$invalid) {
        this.$store.dispatch('login/signIn', this.form)
        if (this.error) {
          this.text = this.error
          this.snackbar = true
          this.snackbarColor = 'red'
          this.showOTP = false
        }
      }
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 1.5em;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin-top: 1em;
}
</style>
