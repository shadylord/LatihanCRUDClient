import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";

require("../node_modules/bootswatch/dist/flatly/bootstrap.min.css");

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
