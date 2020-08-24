import Vue from "vue";
import { firestorePlugin, rtdbPlugin } from "vuefire";
import App from "./App.vue";
import "firebaseui/dist/firebaseui.css";

import router from "./router";
import store from "./store";

Vue.use(firestorePlugin, rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
