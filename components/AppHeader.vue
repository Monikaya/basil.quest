<script setup lang="js">
    import '~/assets/css/header.css';
</script>

<template>
    <div class="app-header">
        <div class="home-button">
            <ULink to="/">basil.quest</ULink>
        </div>
        <div class="dashboard">
            <ULink to="/admin">Dashboard</ULink>
        </div>
    </div>
</template>

<style scoped>
 /* I legit don't know why i need this
 nuxt gets mad at me if I remove
 gonna leave it like this & deal with it later :P */
</style>