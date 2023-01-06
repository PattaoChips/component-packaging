import Vue from "vue";
import VueRouter from "vue-router";
import Mybutton from "../views/Mybutton.vue";
import Mytable from "../views/Mytable.vue";
import Myecharts from "../views/Myecharts.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Mybutton",
    component: Mybutton,
  },
  {
    path: "/table",
    name: "Mytable",
    component: Mytable,
  },
  {
    path: "/echarts",
    name: "Myecharts",
    component: Myecharts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
