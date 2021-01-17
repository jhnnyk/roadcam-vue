import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import AdminPage from './admin/AdminPage.vue';
import ZonePage from './pages/ZonePage.vue';
import RoutePage from './pages/RoutePage.vue';
import CamPage from './pages/CamPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/admin', name: 'AdminPage', component: AdminPage },
  { path: '/:zoneSlug', name: 'ZonePage', component: ZonePage },
  {
    path: '/:zoneSlug/roads/:routeSlug',
    name: 'RoutePage',
    component: RoutePage,
  },
  {
    path: '/:zoneSlug/roads/:routeSlug/:slug',
    name: 'CamPage',
    component: CamPage,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
