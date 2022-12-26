import { createRouter, createWebHistory } from 'vue-router'
import PageOne from '../components/PageOne/index.vue'
import PageTwo from '../components/PageTwo/index.vue'
import NotFound from '../components/NotFound404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: PageOne
        },
        {
            path: '/page2',
            component: PageTwo
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ]
})

export default router