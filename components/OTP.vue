<template>
    <Modal v-model="show">
        <div class="container" >
            <h1 class="mb-8">
                OTP
            </h1>
            <v-otp-input
                length="4"
                class="justify-center"
                :disabled="loading"
                @finish="onFinish"
            ></v-otp-input>
            <v-btn text color="blue" class="btn-resend">Resend OTP Code</v-btn>
            
            <v-overlay absolute :value="loading">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </v-overlay>
            <v-snackbar
                v-model="snackbar"
                :color="snackbarColor"
                :timeout="2000"
            >
            {{ text }}
            </v-snackbar>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: 'OtpComponent',
        props: {
            value: Boolean
        },
        data: () => ({
            loading: false,
            snackbar: false,
            snackbarColor: 'default',
            otp: '',
            text: '',
            expectedOtp: '1337',
        }),
        computed: {
            show: {
                get () {
                    return this.value
                },
                set (value) {
                    this.$emit('input', value)
                }
            }
        },
        methods:{
            onFinish(rsp){
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
                    this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`
                    this.snackbar = true
                    return rsp === this.expectedOtp ? this.$router.push('/profile') : []
                }, 3000)
            }
        }
    }
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    align-items: center;
    justify-content: center;
}
.btn-resend::before{
    display: none;
}
</style>