<template>
  <div class="container">
    <OTP v-model="showOTP" />
    <Card>
      <h1>Register</h1>
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

        <v-text-field
          v-model="form.country"
          type="text"
          label="Country"
          :error-messages="countryErrorMessage"
          @blur="$v.form.country.$touch()"
        ></v-text-field>

        <div class="d-flex mt-2 justify-end">
          <v-btn type="submit" color="blue"> register </v-btn>
        </div>
      </v-form>

      <v-overlay absolute :value="$store.get('register/loading')">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-overlay>
    </Card>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import {
  required,
  helpers,
  minLength,
  maxLength,
  alpha,
} from 'vuelidate/lib/validators'

const phoneNumberFormat = helpers.regex('alpha', /^(\+62)8[1-9][0-9]{6,9}$/i)
export default {
  name: 'RegisterPage',
  data() {
    return {
      form: {
        phone: '+62',
        password: '',
        country: '',
        latlong: 'test',
        device_token: 'test',
        device_type: 2,
      },
      showOTP: false,
      text: '',
      snackbar: false,
      snackbarColor: '',
    }
  },

  validations: {
    form: {
      phone: {
        required,
        phoneNumberFormat,
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16),
      },
      country: {
        required,
        alpha,
      },
    },
  },

  computed: {
    phoneNumberErrorMessage() {
      return this.$v.form.phone.$dirty && !this.$v.form.phone.required
        ? 'Phone Number is Required'
        : this.$v.form.phone.$dirty && !this.$v.form.phone.phoneNumberFormat
        ? 'Wrong phone number format'
        : []
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
    countryErrorMessage() {
      return this.$v.form.country.$dirty && !this.$v.form.country.required
        ? 'Country is Required'
        : this.$v.form.country.$dirty && !this.$v.form.country.alpha
        ? 'Country field only accept alphabet'
        : []
    },
    error() {
      return this.$store.state.register.error
    },
    errorMessage() {
      return this.$store.state.register.errorMessage
    },
  },

  methods: {
    async submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const res = await this.$store.dispatch('register/signUp', this.form)
        if (res) {
          this.snackbar = false
          this.text = ''
          this.showOTP = true
          this.$store.dispatch('otp/otpRequest', {
            phone: this.$store.state.register.phoneNumber,
          })
        } else {
          this.text = this.errorMessage
          this.snackbar = true
          this.snackbarColor = 'red'
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
