<template>
  <Modal v-model="show">
    <div class="container">
      <h1 class="mb-8">OTP</h1>
      <v-otp-input
        v-model="otp"
        length="4"
        class="justify-center"
        :disabled="loading"
        @finish="onFinish"
      ></v-otp-input>
      <v-btn text color="blue" class="btn-resend" @click.stop="resendOTP"
        >Resend OTP Code</v-btn
      >
      <v-overlay absolute :value="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-overlay>
      <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
        {{ text }}
      </v-snackbar>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'OtpComponent',
  props: {
    value: Boolean,
  },
  data: () => ({
    otp: '',
    text: '',
    snackbar: false,
    snackbarColor: '',
    expectedOtp: '1337',
  }),
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    loading() {
      return this.$store.get('otp/loading')
    },
  },
  methods: {
    onFinish(rsp) {
      this.$store.dispatch('otp/otpMatch', {
        user_id: this.$store.get('register/user').id,
        otp_code: rsp,
      })
      return this.$router.push('/login')
    },
    resendOTP() {
      this.$store.dispatch('otp/otpRequest', {
        phone: this.$store.get('register/phoneNumber'),
      })
      this.snackbarColor = 'gray-darken-4'
      this.snackbar = true
      this.text = 'OTP has been resend'
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  align-items: center;
  justify-content: center;
}
.btn-resend::before {
  display: none;
}
</style>
