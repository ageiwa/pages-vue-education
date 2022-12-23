import { createRouter, createWebHistory } from 'vue-router'
import PageOne from '../components/PageOne.vue'
import PageTwo from '../components/PageTwo.vue'

const routes = [
    {
        path: '/',
        name: 'Page1',
        component: PageOne
    },
    {
        path: '/page2',
        name: 'Page2',
        component: PageTwo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router