// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { createApp } from "vue";
import App from "./App";
import router from "./router";
import { store } from "./store";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import BaseModal from "./components/UI/BaseModal.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
// const app = createApp(App);
// app.use(store);
// app.use(router);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-modal", BaseModal);
