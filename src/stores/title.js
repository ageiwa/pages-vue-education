import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTitleStore = defineStore('titles', () => {
    const title = ref('Название первой страницы')

    function change(newTitle) {
        title.value = newTitle
    }

    return { title, change }
})