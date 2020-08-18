import Vue from "vue";
import VueRouter from "vue-router";
import MainContent from "../views/MainContent.vue";
import SignIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/main",
    name: "Main",
    component: MainContent
    // beforeEnter: (to, from, next) => {
    //   console.log("checkuser", firebase.auth().currentUser);
    //   if (firebase.auth().currentUser === null) next({ name: "SignIn" });
    //   else next();
    // }
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
