<template>
  <v-app id="inspire">
    <router-view/>
  </v-app>
</template>

<script>
import db from '@/firestore'
import * as types from '@/store/mutation-types'

export default {
  name: 'App',
  mounted() {
    db.collection("users").get().then(querySnapshot => {
      console.log(123)
      querySnapshot.forEach(doc => {
      console.log("Current data: ", doc)
      })
    })
  }
}
</script>
