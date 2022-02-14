<template>
  <Modal v-model="show">
    <v-file-input
      v-model="files"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick a Profile Picture"
      prepend-icon="mdi-camera"
      label="Profile Picture"
    ></v-file-input>
    <v-col class="text-right"
      ><v-btn
        type="submit"
        color="green"
        class="text-right"
        @click.stop="submit(files)"
        >Save</v-btn
      ></v-col
    >
  </Modal>
</template>

<script>
export default {
  name: 'UpdatePictureComponent',
  props: {
    value: Boolean,
  },
  data() {
    return {
      files: undefined,
      currentImage: undefined,
      previewImage: undefined,
    }
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
    async submit(image) {
      const res = await this.$store.dispatch('profile/setAvatar', image)
      if (res) {
        this.show = false
      } else {
        this.show = true
      }
    },
    // selectImage(image) {

    //   // this.currentImage = image
    //   // this.previewImage = URL.createObjectURL(this.currentImage)
    // },
  },
}
</script>
