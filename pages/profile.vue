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
    <v-row class="mt-4">
      <v-col class="mr-4">
        <v-row>
          <v-avatar size="160" class="mx-auto" style="z-index: 1">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
              width="100%"
            />
          </v-avatar>
        </v-row>
        <v-row>
          <Card style="padding-top: 8em; margin-top: -5em">
            <v-row class="ml-12">
              <p>Name :</p>
              <v-spacer />
              <p class="mr-16">Test</p>
            </v-row>
            <v-row class="ml-12">
              <p>Gender :</p>
              <v-spacer />
              <p class="mr-16">Test</p>
            </v-row>
            <v-row class="ml-12">
              <p>Birthday :</p>
              <v-spacer />
              <p class="mr-16">Test</p>
            </v-row>
            <v-row class="ml-12">
              <p>Hometown :</p>
              <v-spacer />
              <p class="mr-16">Test</p>
            </v-row>
            <v-row class="ml-12">
              <p>Bio :</p>
              <v-spacer />
              <p class="mr-16">Test</p>
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
        <Card class="pt-4">
          <h1 class="mb-8">Career</h1>
          <v-row class="ml-12">
            <p>Position :</p>
            <v-spacer />
            <p class="mr-16">Test</p>
          </v-row>
          <v-row class="ml-12">
            <p>Company :</p>
            <v-spacer />
            <p class="mr-16">Test</p>
          </v-row>
          <v-row class="ml-12">
            <p>Starting From :</p>
            <v-spacer />
            <p class="mr-16">Test</p>
          </v-row>
          <v-row class="ml-12">
            <p>Ending In :</p>
            <v-spacer />
            <p class="mr-16">Test</p>
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
        <Card class="pt-4">
          <h1 class="mb-8">Education</h1>
          <v-row class="ml-12">
            <p>School Name :</p>
            <v-spacer />
            <p class="mr-16">Test</p>
          </v-row>
          <v-row class="ml-12">
            <p>Graduation Time :</p>
            <v-spacer />
            <p class="mr-16">Test</p>
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
  data() {
    return {
      showUpdateProfile: false,
      showUpdateCareer: false,
      showUpdateEducation: false,
    }
  },
}
</script>
