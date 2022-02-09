<template>
  <Modal v-model="show">
    <h1 style="text-align: center">Update Profile</h1>
    <v-form ref="form" lazy-validation @submit.prevent="submit()">
      <v-text-field
        v-model="form.name"
        label="Name"
        :error-messages="nameErrorMessage"
        @blur="$v.form.name.$touch()"
      ></v-text-field>

      <v-select
        v-model="form.gender"
        :items="gender_items"
        item-text="text"
        item-value="val"
        label="Gender"
        :error-messages="genderErrorMessage"
        @blur="$v.form.gender.$touch()"
      >
      </v-select>

      <v-menu
        v-model="birthday_picker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <v-text-field
            v-model="form.birthday"
            label=" Birthday"
            readonly
            v-bind="attrs"
            :error-messages="birthdayErrorMessage"
            @blur="$v.form.birthday.$touch()"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.birthday"
          @input="birthday_picker = false"
        ></v-date-picker>
      </v-menu>

      <v-text-field
        v-model="form.hometown"
        label="Hometown"
        :error-messages="hometownErrorMessage"
        @blur="$v.form.hometown.$touch()"
      ></v-text-field>

      <v-textarea
        v-model="form.bio"
        label="Bio"
        rows="3"
        row-height="10"
        :error-messages="bioErrorMessage"
        @blur="$v.form.bio.$touch()"
      ></v-textarea>

      <v-btn
        block
        color="green"
        class="mt-8"
        type="submit"
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
  name: 'UpdateProfileComponent',
  props: {
    value: Boolean,
  },
  data() {
    return {
      form: {
        name: '',
        gender: '',
        birthday: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        hometown: '',
        bio: '',
      },
      birthday_picker: false,
      gender: '',
      gender_items: [
        { text: 'Male', val: 0 },
        { text: 'Female', val: 1 },
      ],
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      gender: {
        required,
      },
      birthday: {
        required,
      },
      hometown: {
        required,
      },
      bio: {
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
    nameErrorMessage() {
      return this.$v.form.name.$dirty && !this.$v.form.name.required
        ? 'Name is Required'
        : []
    },
    genderErrorMessage() {
      return this.$v.form.gender.$dirty && !this.$v.form.gender.required
        ? 'Gender is Required'
        : []
    },
    birthdayErrorMessage() {
      return this.$v.form.birthday.$dirty && !this.$v.form.birthday.required
        ? 'Birthday is Required'
        : []
    },
    hometownErrorMessage() {
      return this.$v.form.hometown.$dirty && !this.$v.form.hometown.required
        ? 'Hometown is Required'
        : []
    },
    bioErrorMessage() {
      return this.$v.form.bio.$dirty && !this.$v.form.bio.required
        ? 'Bio is Required'
        : []
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      // console.log(this.$v)
      // perform async actions
      if (!this.$v.$invalid) {
        // return (this.showOTP = true)
        // return this.$router.push('/profile')
      }
    },
  },
}
</script>

<style></style>
