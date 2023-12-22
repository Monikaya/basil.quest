
<template>
  <main>
    <div class="titleSpace">
      <button  @click="signinRedirect()">Sign In with Google</button>
      <button  @click="signMeOut()">Sign Out</button>
      <p class="user" v-if="user">{{ user.uid }}</p>
      <p v-if="auth" class="auth">{{ auth }}</p>
    </div>
  </main>
</template>

<script setup>
  import {
    getRedirectResult,
    signInWithRedirect,
    signInWithPopup,
    signOut,
    
  } from 'firebase/auth'
  import { useCurrentUser, useFirebaseAuth } from 'vuefire'

  const auth = useFirebaseAuth();
  const user = useCurrentUser();

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
    })
  }

  function signinPopup() {
    signInWithPopup(auth, googleAuthProvider).catch((reason) => {
      console.error('Failed signinPopup', reason);
      error.value = reason;
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