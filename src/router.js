import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import Contact from "./pages/Contact.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
