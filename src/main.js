// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vuex from "vuex";
import { SeqDiagram, Store } from "vue-sequence";
import "vue-sequence/dist/vue-sequence.css";
import App from "./App";
import Sample1 from "./samples/Sample1.seq";

Vue.use(vuex);
Vue.component("seq-diagram", SeqDiagram);
let store = new vuex.Store(Store);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { SeqDiagram },
  render: h => h("seq-diagram"),
  store
}).$mount("#app");
// This is the line to feed different DSL to generate the sequence diagram!
// store.commit("code", Sample1);
store.dispatch("updateCode", { code: Sample1 });
