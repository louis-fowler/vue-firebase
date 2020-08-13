import Vue from "vue";
import { firestorePlugin, rtdbPlugin } from "vuefire";
import App from "./App.vue";

Vue.use(firestorePlugin, rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
