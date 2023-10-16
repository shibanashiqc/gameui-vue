// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '../components/sections/HomeSection.vue';
import JsonScreen from '../components/sections/JsonScreen.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeSection
    },
    {
        path: '/json',
        name: 'json',
        component: JsonScreen
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
