import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.filter('state', (value, dirtyOnly = false) => {
  if (dirtyOnly) {
    if (!value.$dirty) return null
  }
  return !value.$invalid
})