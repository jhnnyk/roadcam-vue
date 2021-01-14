import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import AdminPage from './admin/AdminPage.vue';
import StatePage from './pages/StatePage.vue';
import HwyPage from './pages/HwyPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/admin', name: 'AdminPage', component: AdminPage },
  { path: '/:stateSlug', name: 'StatePage', component: StatePage },
  { path: '/:stateSlug/roads/:hwySlug', name: 'HwyPage', component: HwyPage },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
