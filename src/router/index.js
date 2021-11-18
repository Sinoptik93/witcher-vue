import { createRouter, createWebHistory } from "vue-router";
import main from "../pages/main";
import order from "../pages/order";

const routes = [
  {
    path: "/",
    name: "Main",
    component: main,
  },
  {
    path: "/order",
    name: "Order",
    component: order,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
