import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Parent from '../views/Parent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/parent',
    name: 'Parent',
    component: Parent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
