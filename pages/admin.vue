
<template>
    <div class="titleSpace">
        <h1>Among Us!</h1>
        <p v-if="user">yippee wahoo {{ user.uid }}</p>
        <p v-if="!user">mean nologined</p>
    </div>
</template>

<script setup>

    definePageMeta({
        middleware: ['auth']
    })

    const user = await getAuth();

</script>