import Vue from "vue";
import { firestorePlugin, rtdbPlugin } from "vuefire";
import router from "./routes";

Vue.use(firestorePlugin, rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  router
}).$mount("#app");
