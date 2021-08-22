import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/card',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
            index: 1
        }
    },
    {
        path: '/card',
        name: 'card',
        component: () => import('@/views/Card.vue'),
        meta: {
            index: 1,
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;