import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTitleStore = defineStore('titles', () => {
    const title = ref('Page #1 Title')

    function change(newTitle) {
        title.value = newTitle
    }

    return { title, change }
})