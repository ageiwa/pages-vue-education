<script setup>
    import { ref, onMounted } from 'vue'
    import { useTitleStore } from '../../stores/title'
    import { useCountVisit } from '../../stores/countVisits'

    const title = useTitleStore().title
    const visits = useCountVisit()
    const countVisiting = ref(visits.visits)

    onMounted(() => visits.increment())

</script>

<template>
    <div class="page-one">
        <h1 class="page-one__title">{{ title }}</h1>
        <p class="page-one__count-visits">Количество посещений: {{ countVisiting }}</p>
    </div>
</template>

<style scoped lang="scss">
    @import './index.scss'
</style>