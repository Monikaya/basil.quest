<script setup>
    import '~/assets/css/body.css';

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
    div {
        position: absolute;
        top: 25%;
        left:50%;
        transform: translate(-50%, -50%);
    }
</style>