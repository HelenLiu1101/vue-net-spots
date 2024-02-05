import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Spots from "./components/Spots.vue";

const routes = [
  {
    path: "/", //http://loclhost:5173/
    component: Home,
  },
  {
    path: "/about", //http://loclhost:5173/about
    component: About,
  },
  {
    path: "/contact", //http://loclhost:5173/contact
    component: Contact,
  },
  {
    path: "/spots", //http://loclhost:5173/spots
    component: Spots,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
