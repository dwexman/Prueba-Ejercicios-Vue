import { describe, it, expect } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

describe('Vue Router - Component Existence', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/about', name: 'About', component: About },
    ],
  });

  it('should have a Home route with the correct component', () => {
    const homeRoute = router.getRoutes().find((route) => route.name === 'Home');
    expect(homeRoute).toBeDefined();
    expect(homeRoute?.component).toBe(Home);
  });

  it('should have an About route with the correct component', () => {
    const aboutRoute = router.getRoutes().find((route) => route.name === 'About');
    expect(aboutRoute).toBeDefined();
    expect(aboutRoute?.component).toBe(About);
  });
});
