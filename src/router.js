import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import One from "./views/One.vue";
import Todo from "./views/Todo.vue";
import ExercicioOne from "./views/exercicios/One.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/one",
      name: "one",
      component: One
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    },
    {
      path: "/e-one",
      name: "e-one",
      component: ExercicioOne
    }
  ]
});
