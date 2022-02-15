<template>
  <Modal v-model="show">
    <v-form @submit.prevent="submit()">
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick a new Cover"
        prepend-icon="mdi-camera"
        label="Cover"
        @change="handleFileUpload($event)"
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
  name: 'UpdateBannerComponent',
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
    async submit() {
      const formData = new FormData()
      formData.append('image', this.file)
      const res = await this.$store.dispatch('profile/setCover', formData)
      if (res) {
        this.show = false
        location.reload()
      }
    },
    handleFileUpload(event) {
      this.file = event
    },
  },
}
</script>

<style></style>
