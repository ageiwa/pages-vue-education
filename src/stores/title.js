import { defineStore } from 'pinia'

export const useTitleStore = defineStore('titles', {
    state: (title = 'Название первой страницы') => {
        return { title: title }
    },
    actions: {
        change(title) {
            this.title = title
        }
    }
})