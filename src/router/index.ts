import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Login from "../Pages/Login.vue";
import Index from "../Pages/Index.vue";

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Index },
  ]
  

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});

export default router;
