<script setup>
    import { ref } from 'vue'
    import { useTitleStore } from '../stores/title';

    const storeTitle = useTitleStore()
    const title = ref(storeTitle.title)

    function onInput(e) {
        title.value = e.target.innerText
        storeTitle.change(e.target.innerText)
    }

</script>

<template>
    <h1>Hello Page two</h1>
    <div @keyup="onInput" class="input-div" contenteditable="true">{{ title }}</div>
    <br>
</template>