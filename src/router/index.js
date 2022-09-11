import Vue from 'vue';
import VueRouter from 'vue-router';
// import { createWebHistory, createRouter } from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: () => import('@/views/main/Index')
    },
    {
        path: "/api",
        name: 'Api',
        component: () => import('@/views/api/Index')
    },
    {
        path: "/test2",
        name: 'Test2',
        component: () => import('@/views/test2/Index')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

export default router;