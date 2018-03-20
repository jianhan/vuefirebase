<template>
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import {firebaseUIConfigs} from '@/.env'

export default {
  name: 'firebase-auth',
  mounted () {
    let ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', firebaseUIConfigs)
  }
}
</script>
