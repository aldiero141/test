import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (date, format = 'DD-MM-YYYY') => {
  return moment(date).format(format)
})
