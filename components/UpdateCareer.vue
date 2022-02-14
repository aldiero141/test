<template>
  <Modal v-model="show">
    <h1 style="text-align: center">Update Career</h1>
    <v-form ref="form" lazy-validation @submit.prevent="submit()">
      <v-text-field
        v-model="form.company_name"
        label="Company"
        :error-messages="companyErrorMessage"
        @blur="$v.form.company_name.$touch()"
      ></v-text-field>

      <v-menu
        v-model="starting_picker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <v-text-field
            v-model="form.starting_from"
            label=" Starting From"
            readonly
            v-bind="attrs"
            :error-messages="startingErrorMessage"
            @blur="$v.form.starting_from.$touch()"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.starting_from"
          @input="starting_picker = false"
        ></v-date-picker>
      </v-menu>

      <v-menu
        v-model="ending_picker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <v-text-field
            v-model="form.ending_in"
            label=" Ending In"
            readonly
            v-bind="attrs"
            :error-messages="endingErrorMessage"
            @blur="$v.form.ending_in.$touch()"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.ending_in"
          @input="ending_picker = false"
        ></v-date-picker>
      </v-menu>

      <v-btn
        type="submit"
        block
        color="green"
        class="mt-8"
        @click.stop="!$v.$invalid"
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
  name: 'UpdateCareerComponent',
  props: {
    value: Boolean,
    datas: { type: Object, default: () => {} },
  },
  data() {
    return {
      form: {
        position: 'default',
        company_name: '',
        starting_from: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        ending_in: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
      starting_picker: false,
      ending_picker: false,
    }
  },
  validations: {
    form: {
      position: {
        required,
      },
      company_name: {
        required,
      },
      starting_from: {
        required,
      },
      ending_in: {
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
    positionErrorMessage() {
      return this.$v.form.position.$dirty && !this.$v.form.position.required
        ? 'Position is Required'
        : []
    },
    companyErrorMessage() {
      return this.$v.form.company_name.$dirty &&
        !this.$v.form.company_name.required
        ? 'Company Name is Required'
        : []
    },
    startingErrorMessage() {
      return this.$v.form.starting_from.$dirty &&
        !this.$v.form.starting_from.required
        ? 'Starting Date is Required'
        : []
    },
    endingErrorMessage() {
      return this.$v.form.ending_in.$dirty && !this.$v.form.ending_in.required
        ? 'Ending Date is Required'
        : []
    },
  },
  mounted() {
    this.form.company_name = this.datas.company_name
    this.form.starting_from = this.datas.starting_from
    this.form.ending_in = this.datas.ending_in
  },
  methods: {
    async submit() {
      this.$v.$touch()
      const res = await this.$store.dispatch('profile/setCareer', this.form)
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
