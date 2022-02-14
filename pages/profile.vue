<template>
  <div class="d-flex flex-column my-10" style="height: 100vh">
    <v-row class="align-center mb-4">
      <Card class="d-flex align-center ma-0 pa-0" style="cursor: pointer">
        <UpdateBanner v-model="showUpdateBanner" />
        <img
          src="https://picsum.photos/id/11/500/300"
          alt="banner-default"
          style="
            object-fit: cover;
            border-radius: 0.5em;
            height: 30vh;
            z-index: -0;
          "
          width="100%"
          @click.stop="handlerUpdateBanner"
        />
        <!-- <img
          v-else
          :src="user.cover_picture.url"
          alt="banner-default"
          style="object-fit: cover; border-radius: 0.5em; height: 30vh"
          width="100%"
        /> -->
      </Card>
    </v-row>
    <v-row class="mt-4" style="height: 100vh">
      <v-col class="mr-4">
        <v-row>
          <UpdatePicture v-model="showUpdatePicture" />
          <v-avatar
            size="160"
            class="mx-auto"
            style="z-index: 1; cursor: pointer"
            @click.stop="handlerUpdatePicture"
          >
            <img
              v-if="!user.user_image"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
              width="100%"
            />
            <img v-else :src="user.user_image" alt="John" width="100%" />
          </v-avatar>
        </v-row>
        <v-row>
          <Card v-if="user" style="padding-top: 8em; margin-top: -5em">
            <UpdateProfile v-model="showUpdateProfile" :datas="user" />
            <v-row class="ml-12">
              <p>Name :</p>
              <v-spacer />
              <p v-if="user.name" class="mr-16">{{ user.name }}</p>
              <p v-if="!user.name" class="mr-16">-</p>
            </v-row>
            <v-row class="ml-12">
              <p>Gender :</p>
              <v-spacer />
              <p v-if="user.gender" class="mr-16">{{ user.gender }}</p>
              <p v-if="!user.gender" class="mr-16">-</p>
            </v-row>
            <v-row class="ml-12">
              <p>Birthday :</p>
              <v-spacer />
              <p v-if="user.birthday" class="mr-16">{{ user.birthday }}</p>
              <p v-if="!user.birthday" class="mr-16">-</p>
            </v-row>
            <v-row class="ml-12">
              <p>Hometown :</p>
              <v-spacer />
              <p v-if="user.hometown" class="mr-16">{{ user.hometown }}</p>
              <p v-if="!user.hometown" class="mr-16">-</p>
            </v-row>
            <v-row class="ml-12">
              <p>Bio :</p>
              <v-spacer />
              <p v-if="user.bio" class="mr-16">{{ user.bio }}</p>
              <p v-if="!user.bio" class="mr-16">-</p>
            </v-row>
            <v-btn
              block
              color="green"
              class="mt-8"
              @click.stop="handlerUpdateProfile"
              >Update Profile</v-btn
            >
          </Card>
        </v-row>
      </v-col>
      <v-col>
        <Card v-if="career" class="pt-4">
          <UpdateCareer v-model="showUpdateCareer" :datas="career" />
          <h1 class="mb-8">Career</h1>
          <v-row class="ml-6">
            <p>Company :</p>
            <v-spacer />
            <p v-if="career.company_name" class="mr-12">
              {{ career.company_name }}
            </p>
            <p v-if="!career.company_name" class="mr-12">-</p>
          </v-row>
          <v-row class="ml-6">
            <p>Starting From :</p>
            <v-spacer />
            <p v-if="career.starting_from" class="mr-12">
              {{ career.starting_from }}
            </p>
            <p v-if="!career.starting_from" class="mr-12">-</p>
          </v-row>
          <v-row class="ml-6">
            <p>Ending In :</p>
            <v-spacer />
            <p v-if="career.ending_in" class="mr-12">
              {{ career.ending_in }}
            </p>
            <p v-if="!career.ending_in" class="mr-12">-</p>
          </v-row>
          <v-btn
            block
            color="green"
            class="mt-8"
            @click.stop="handlerUpdateCareer"
            >Update Career</v-btn
          >
        </Card>
      </v-col>
      <v-col class="mr-n3">
        <Card v-if="education" class="pt-4">
          <UpdateEducation v-model="showUpdateEducation" :datas="education" />
          <h1 class="mb-8">Education</h1>
          <v-row class="ml-6">
            <p>School Name :</p>
            <v-spacer />
            <p v-if="education.school_name" class="mr-12">
              {{ education.school_name }}
            </p>
            <p v-if="!education.school_name" class="mr-12">-</p>
          </v-row>
          <v-row class="ml-6">
            <p>Graduation Time :</p>
            <v-spacer />
            <p v-if="education.graduation_time" class="mr-12">
              {{ education.graduation_time }}
            </p>
            <p v-if="!education.graduation_time" class="mr-12">-</p>
          </v-row>
          <v-btn
            block
            color="green"
            class="mt-8"
            @click.stop="handlerUpdateEducation"
            >Update Education</v-btn
          >
        </Card>
        <v-snackbar
          v-model="snackbar"
          :color="snackbarColor"
          :timeout="2000"
          style="justify-center"
        >
          {{ text }}
        </v-snackbar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  layout: 'dashboard',
  // middleware: ['auth'],
  data() {
    return {
      showUpdateProfile: false,
      showUpdateCareer: false,
      showUpdateEducation: false,
      showUpdatePicture: false,
      showUpdateBanner: false,
    }
  },
  computed: {
    user() {
      return this.$store.get('profile/user')
    },
    career() {
      return this.$store.get('profile/user').career
    },
    education() {
      return this.$store.get('profile/user').education
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      await this.$store.dispatch('profile/getProfile')
    },
    handlerUpdateProfile() {
      this.showUpdateProfile = true
    },
    handlerUpdateCareer() {
      this.showUpdateCareer = true
    },
    handlerUpdateEducation() {
      this.showUpdateEducation = true
    },
    handlerUpdatePicture() {
      this.showUpdatePicture = true
    },
    handlerUpdateBanner() {
      this.showUpdateBanner = true
    },
  },
}
</script>
