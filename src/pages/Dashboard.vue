<template>
<v-form ref="form" lazy-validation @submit.prevent="handleSubmit">
  {{ name }} {{ email }}
  <v-text-field label="Name" v-model="name" :counter="10" required></v-text-field>
  <v-text-field label="E-mail" v-model="email" required></v-text-field>
  <v-btn type="submit">
    submit
  </v-btn>
</v-form>
</template>

<script>
import db from '@/firestore'

export default {
  name: 'pages-dashboard',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      db.collection('users').add({
        first: 'Jian',
        last: 'Han',
        born: 1984
      }).then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      }).catch(function(error) {
        console.error('Error adding document: ', error)
      })
    }
  }
}
</script>
