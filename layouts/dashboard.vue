<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      
      <v-btn to="/" color="red">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
   
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nuxt Test',
    }
  },
}
</script>
