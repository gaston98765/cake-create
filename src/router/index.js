
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables

import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import Cart from '@/pages/Cart.vue';
import Contact from '@/pages/Contact.vue';
import About from '@/pages/About.vue';
import Myaccount from "@/pages/Myaccount.vue";
import PreMadeCakes from '@/pages/PreMadeCakes.vue';
import Customize from '@/pages/Customize.vue';
import Login from '@/pages/Login.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/Cart', component: Cart },
  {path: '/Contact', component: Contact},
  {path: '/About', component: About },
  {path: '/Myaccount', component: Myaccount},
  { path: '/pre-made-cakes', component: PreMadeCakes },
  { path: '/customizecake', component: Customize },
  { path: '/login', component: Login },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


