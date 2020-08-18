import Vue from "vue";
import VueRouter from "vue-router";
import MainContent from "../views/MainContent.vue";
import SignIn from "../views/SignIn.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: SignIn,
    name: "SignIn"
  },
  {
    path: "/main",
    component: MainContent,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user === null) next({ name: "SignIn" });
        else next();
      });
    }
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
