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
    db.collection("courses").onSnapshot(doc => {
      this.$store.commit(types.REFRESH_COURSES, doc.docs)
    })
  }
}
</script>
