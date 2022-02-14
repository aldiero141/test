<template>
  <Modal v-model="show">
    <v-form @submit.prevent="submit()">
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick a Profile Picture"
        prepend-icon="mdi-camera"
        label="Profile Picture"
      ></v-file-input>
      <v-col class="text-right"
        ><v-btn type="submit" color="green" class="text-right"
          >Save</v-btn
        ></v-col
      >
    </v-form>
  </Modal>
</template>

<script>
export default {
  name: 'UpdatePictureComponent',
  props: {
    value: Boolean,
  },
  data() {
    return {}
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
  },
  methods: {
    submit() {
      this.show = false
    },
  },
}
</script>

<style></style>
