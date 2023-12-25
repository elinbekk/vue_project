import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(0),
    routes:
        [
            {
                path: '/',
                component: () => import('../main-page/MainRecipesPage.vue')
            },
            {
                path: '/recipes/:id',
                name: 'recipe-details',
                component: () => import('../detail-page/DetailRecipesPage.vue'),
                props:
            },
            {
                path:'/favourite',
                component: ()=>import('../favourite-page/FavouritePage.vue')
            },
            {
                path:'/about',
                component: () => import('../about-page/AboutUsPage.vue')
            }

        ]
})

export default router