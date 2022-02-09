<template>
  <Modal v-model="show">
    <h1 style="text-align: center">Update Career</h1>
    <v-form ref="form" lazy-validation @submit.prevent="submit()">
      <v-text-field
        v-model="form.position"
        label="Position"
        :error-messages="positionErrorMessage"
        @blur="$v.form.position.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="form.company"
        label="Company"
        :error-messages="companyErrorMessage"
        @blur="$v.form.company.$touch()"
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

      <!-- <v-text-field
        v-model="form.starting_from"
        label="Starting From"
      ></v-text-field>
      <v-text-field v-model="form.ending_in" label="Ending In"></v-text-field> -->

      <!-- <v-text-field
                    v-model="form.bio"
                    label="bio"
                    :error-messages="passwordErrorMessage"
                    @blur="$v.form.password.$touch()"
                    ></v-text-field> -->

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
  name: 'UpdateCareerComponent',
  props: {
    value: Boolean,
  },
  data() {
    return {
      form: {
        position: '',
        company: '',
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
      company: {
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
      return this.$v.form.company.$dirty && !this.$v.form.company.required
        ? 'Company is Required'
        : []
    },
    startingErrorMessage() {
      return this.$v.form.starting_from.$dirty &&
        !this.$v.form.starting_from.required
        ? 'Company is Required'
        : []
    },
    endingErrorMessage() {
      return this.$v.form.ending_in.$dirty && !this.$v.form.ending_in.required
        ? 'Company is Required'
        : []
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      // if(!this.$v.$invalid){
      //     return
      // }
    },
  },
}
</script>

<style></style>
