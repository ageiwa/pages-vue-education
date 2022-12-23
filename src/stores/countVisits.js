import { defineStore } from 'pinia'

export const useCountVisit = defineStore('visits', {
    state: (visits = 1) => {
        return {visits: visits}
    },
    actions: {
        increment() {
            this.visits++
        }
    }
})