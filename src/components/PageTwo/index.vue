<script setup>
    import { useTitleStore } from '../../stores/title'

    const storeTitle = useTitleStore()

    function onInput(e) {
        storeTitle.change(e.target.innerText)
    }

</script>

<template>
    <div class="page-two">
        <h1 class="page-two__title">Change title on Page #1:</h1>
        <div class="page-two__input-div" @keyup="onInput" contenteditable="true">{{ storeTitle.title }}</div>
    </div>
</template>

<style scoped lang="scss">
    @import './index.scss'
</style>