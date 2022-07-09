import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import UsersShow from "../views/UsersShow.vue";
import AddressesShow from "../views/AddressesShow.vue";
import AddressesIndex from "../views/AddressesIndex.vue";
import LogoutView from "../views/LogoutView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/address",
    name: "address",
    component: AddressesShow,
  },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/users/:id", name: "users-show", component: UsersShow },
  { path: "/addresses/:id", name: "addresses-show", component: AddressesShow },
  { path: "/addresses", name: "addresses-index", component: AddressesIndex },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
