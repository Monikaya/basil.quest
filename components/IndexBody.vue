<script setup>
    const version = await getVersion();
    // console.log(version);
</script>

<template>
    <div class="titleSpace">
        <h1>basil.quest</h1>
        <UBadge variant="subtle">Version: {{ version }}</UBadge>
    </div>
</template>