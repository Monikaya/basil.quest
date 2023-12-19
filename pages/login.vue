
<template>
  <main>
    <div class="titleSpace">
      <button v-if="!user" @click="signinRedirect()">Sign In with Google</button>
      <button v-if="user" @click="signMeOut()">Sign Out</button>
    </div>
  </main>
</template>

<script setup>
import {
  getRedirectResult,
  signInWithRedirect,
  signOut,
  getAuth
} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

// aren't using this rn bc it doesn't seem to work as well tbh. wompwomp
// const auth = useFirebaseAuth()

const auth = getAuth();
const user = useCurrentUser()

// sign out
function signMeOut() {
  signOut(auth).catch((reason) => {
    console.error("Failed signOut", reason);
    console.value = reason;
  })
}

// display errors if any
const error = ref(null)
function signinRedirect() {
  signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signinRedirect', reason);
    error.value = reason;
  }).then((result) => {
    const user = result.user;
  })
}

// only on client side
onMounted(() => {
  getRedirectResult(auth).catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  })
})
</script>

<script>
    import { GoogleAuthProvider } from '@firebase/auth'
    export const googleAuthProvider = new GoogleAuthProvider();
</script>