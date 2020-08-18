import Vue from "vue";
import { firestorePlugin, rtdbPlugin } from "vuefire";
import App from "./App.vue";
import "firebaseui/dist/firebaseui.css";

import router from "./router";

Vue.use(firestorePlugin, rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
