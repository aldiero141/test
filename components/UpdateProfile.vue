<template>
  <Modal v-model="show">
    <h1 style="text-align: center">Update Profile</h1>
    <v-form ref="form" lazy-validation @submit.prevent="submit()">
      <v-text-field
        v-model="form.name"
        :error-messages="nameErrorMessage"
        label="Name"
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

      <v-btn block color="green" class="mt-8" type="submit">Update</v-btn>
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
    datas: { type: Object, default: () => {} },
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
    // user() {
    //   return this.$store.get('profile/user')
    // },
  },
  created() {
    this.form.name = this.datas.name
    this.form.gender = this.datas.gender
    this.form.birthday = this.datas.birthday
    this.form.hometown = this.datas.hometown
    this.form.bio = this.datas.bio
  },
  methods: {
    async submit() {
      this.$v.$touch()
      const res = await this.$store.dispatch('profile/setProfile', this.form)
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
