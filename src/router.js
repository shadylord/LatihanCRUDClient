import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreateUser from "./views/CreateUser.vue";
import Users from "./views/Users.vue";
import UpdateUser from "./views/UpdateUser.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/users/add",
      name: "create-user",
      component: CreateUser
    },
    {
      path: "/users/update/:id",
      name: "update-user",
      component: UpdateUser
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound
    }
  ]
});
