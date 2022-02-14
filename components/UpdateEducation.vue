<template>
  <Modal v-model="show">
    <h1 style="text-align: center">Update Education</h1>
    <v-form ref="form" lazy-validation @submit.prevent="submit()">
      <v-text-field
        v-model="form.school_name"
        label="School Name"
        :error-messages="schoolNameErrorMessage"
        @blur="$v.form.school_name.$touch()"
      ></v-text-field>

      <v-menu
        v-model="graduationTime_picker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <v-text-field
            v-model="form.graduation_time"
            label=" Graduation Time"
            readonly
            v-bind="attrs"
            :error-messages="graduationErrorMessage"
            @blur="$v.form.graduation_time.$touch()"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.graduation_time"
          @input="graduationTime_picker = false"
        ></v-date-picker>
      </v-menu>

      <v-btn
        type="submit"
        block
        color="green"
        class="mt-8"
        @click.stop="!$v.$invalid ? (show = false) : []"
        >Update</v-btn
      >
    </v-form>
  </Modal>
</template>

<script>
import {
  required,
  // helpers,
  // minLength,
  // maxLength,
} from 'vuelidate/lib/validators'

export default {
  name: 'UpdateEducationComponent',
  props: {
    value: Boolean,
    datas: { type: Object, default: () => {} },
  },
  data() {
    return {
      form: {
        school_name: '',
        graduation_time: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
      },
      graduationTime_picker: false,
    }
  },
  validations: {
    form: {
      school_name: {
        required,
      },
      graduation_time: {
        required,
      },
    },
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    schoolNameErrorMessage() {
      return this.$v.form.school_name.$dirty &&
        !this.$v.form.school_name.required
        ? 'School Name is Required'
        : []
    },
    graduationErrorMessage() {
      return this.$v.form.graduation_time.$dirty &&
        !this.$v.form.graduation_time.required
        ? 'Graduation time is Required'
        : []
    },
  },
  mounted() {
    this.form.school_name = this.datas.school_name
    this.form.graduation_time = this.datas.graduation_time
  },
  methods: {
    async submit() {
      this.$v.$touch()
      const res = await this.$store.dispatch('profile/setEducation', this.form)
      if (res) {
        this.snackbar = false
        this.text = ''
        this.show = false
      } else {
        this.text = this.errorMessage
        this.snackbar = true
        this.snackbarColor = 'red'
      }
    },
  },
}
</script>

<style></style>
