import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: function() {
            return import(/* webpackChunkName: "about" */ '../views/About.vue');
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;