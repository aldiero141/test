<template>
  <Modal v-model="show">
    <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick a Profile Picture"
      prepend-icon="mdi-camera"
      label="Profile Picture"
      @change="handleFileUpload($event)"
    ></v-file-input>
    <!-- <label
      >File
      <input type="file" @change="handleFileUpload($event)" />
    </label> -->
    <v-col class="text-right"
      ><v-btn
        type="submit"
        color="green"
        class="text-right"
        @click.stop="submit()"
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
      file: null,
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
    async submit() {
      const formData = new FormData()
      formData.append('image', this.file)
      const res = await this.$store.dispatch('profile/setAvatar', formData)
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
