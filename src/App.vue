<template>
  <v-app id="inspire">
    <router-view/>
  </v-app>
</template>

<script>
import Auth from '@/layouts/Auth'

export default {
  name: 'App',
  components: [
    Auth,
  ],
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
