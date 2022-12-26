<script setup>
    import { ref, onMounted } from 'vue'
    import { useTitleStore } from '../stores/title';
    import { useCountVisit } from '../stores/countVisits'

    const title = useTitleStore().title
    const visits = useCountVisit()
    const countVisiting = ref(visits.visits)

    onMounted(() => {
        visits.increment()
    })
    
</script>

<template>
    <h1>{{ title }}</h1>
    <p>Количество посещений: {{ countVisiting }}</p>
</template>
