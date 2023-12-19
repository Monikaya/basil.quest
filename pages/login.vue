
<script>
    import { GoogleAuthProvider } from '@firebase/auth'
    export const googleAuthProvider = new GoogleAuthProvider();
</script>

<script setup>
import {
  getRedirectResult,
  signInWithRedirect,
  signOut,
} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth() // only exists on client side

// display errors if any
const error = ref(null)
function signinRedirect() {
  signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signinRedirect', reason)
    error.value = reason
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

<template>
  <main>
    <div class="titleSpace">
      <button @click="signinRedirect()">SignIn with Google</button>
    </div>
  </main>
</template>