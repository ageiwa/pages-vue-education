<script setup>
    import { ref, watch } from 'vue'
    import { useTitleStore } from '../stores/title';

    const storeTitle = useTitleStore()
    const title = ref(storeTitle.title)
    

    watch(title, (newTitle) => {
        storeTitle.change(newTitle)
    })

</script>

<template>
    <h1>Hello Page two</h1>
    <input v-model="title">
    <br>
    <RouterLink to="/">Перейти на первую</RouterLink>
</template>

<style scoped>

</style>
