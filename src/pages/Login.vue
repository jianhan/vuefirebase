<template>
<v-flex xs12 sm8 md4>
  <v-card class="elevation-12">
    <firebase-auth/>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
        <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</v-flex>
</template>

<script>
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  name: 'p-login',
  components: {FirebaseAuth}
}
</script>
