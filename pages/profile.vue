<template>
  <div class="d-flex flex-column my-10" style="height: 100vh">
    <UpdateProfile v-model="showUpdateProfile" />
    <UpdateCareer v-model="showUpdateCareer" />
    <UpdateEducation v-model="showUpdateEducation" />
    <v-row class="align-center mb-4">
      <Card
        style="
          background: url('https://picsum.photos/id/11/500/300') no-repeat;
          background-position: center;
          background-size: cover;
          height: 30vh;
        "
      />
    </v-row>
    <v-row class="mt-4" style="height: 100vh">
      <v-col class="mr-4">
        <v-row>
          <v-avatar size="160" class="mx-auto" style="z-index: 1">
            <img
              :src="
                user.user_image
                  ? user.user_image
                  : 'https://cdn.vuetifyjs.com/images/john.jpg'
              "
              alt="John"
              width="100%"
            />
          </v-avatar>
        </v-row>
        <v-row>
          <Card v-if="user" style="padding-top: 8em; margin-top: -5em">
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
              <p v-if="!user.hometown" class="mr-16">{{ user.hometown }}</p>
              <p v-if="!user.hometown" class="mr-16">-</p>
            </v-row>
            <v-row class="ml-12">
              <p>Bio :</p>
              <v-spacer />
              <p v-if="!user.bio" class="mr-16">{{ user.bio }}</p>
              <p v-if="!user.bio" class="mr-16">-</p>
            </v-row>
            <v-btn
              block
              color="green"
              class="mt-8"
              @click.stop="showUpdateProfile = true"
              >Update Profile</v-btn
            >
          </Card>
        </v-row>
      </v-col>
      <v-col>
        <Card v-if="career" class="pt-4">
          <h1 class="mb-8">Career</h1>
          <v-row class="ml-12">
            <p>Company :</p>
            <v-spacer />
            <p v-if="!career.company_name" class="mr-16">
              {{ career.company_name }}
            </p>
            <p v-if="!user.company_name" class="mr-16">-</p>
          </v-row>
          <v-row class="ml-12">
            <p>Starting From :</p>
            <v-spacer />
            <p v-if="!career.starting_from" class="mr-16">
              {{ career.starting_from }}
            </p>
            <p v-if="!user.starting_from" class="mr-16">-</p>
          </v-row>
          <v-row class="ml-12">
            <p>Ending In :</p>
            <v-spacer />
            <p v-if="!career.ending_in" class="mr-16">
              {{ career.ending_in }}
            </p>
            <p v-if="!user.ending_in" class="mr-16">-</p>
          </v-row>
          <v-btn
            block
            color="green"
            class="mt-8"
            @click.stop="showUpdateCareer = true"
            >Update Career</v-btn
          >
        </Card>
      </v-col>
      <v-col class="mr-n3">
        <Card v-if="education" class="pt-4">
          <h1 class="mb-8">Education</h1>
          <v-row class="ml-10">
            <p>School Name :</p>
            <v-spacer />
            <p v-if="!education.school_name" class="mr-16">
              {{ education.school_name }}
            </p>
            <p v-if="!education.school_name" class="mr-16">-</p>
          </v-row>
          <v-row class="ml-10">
            <p>Graduation Time :</p>
            <v-spacer />
            <p v-if="!education.graduation_time" class="mr-16">
              {{ education.graduation_time }}
            </p>
            <p v-if="!education.graduation_time" class="mr-16">-</p>
          </v-row>
          <v-btn
            block
            color="green"
            class="mt-8"
            @click.stop="showUpdateEducation = true"
            >Update Education</v-btn
          >
        </Card>
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
  // watch:{
  //   user(){

  //   }
  // },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      await this.$store.dispatch('profile/getProfile')
    },
  },
}
</script>
