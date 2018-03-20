// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'
import firebase from 'firebase'
import {firebaseConfigs} from '@/.env'

Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp(firebaseConfigs)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth/login')
      }
    })
  }
})
