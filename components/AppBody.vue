<script setup>
    const version = await getVersion();
    console.log(version);
</script>

<template>
    <div class="app-body">
        <h1>basil.quest</h1>
        <p>Version: {{ version }}</p>
    </div>
</template>

<style scoped>
    .app-body {
        text-align: center;
    }
</style>