import Vue from "vue";
import VueRouter from "vue-router";

// import App from "./App.vue";
// import SignIn from "./components/SignIn.vue";

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

Vue.use(VueRouter);

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];

const router = new VueRouter({
  routes
});

export { router };
