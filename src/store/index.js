import Vue from "vue";
import Vuex from "vuex";
import { state, getters, actions, mutations } from "../components/counter";
import {
  state as todoState,
  getters as todoGetters,
  actions as todoActions,
  mutations as todoMutations
} from "../components/todos";
Vue.use(Vuex);

const moduleCounter = {
  state,
  getters,
  actions,
  mutations
};
const moduleTodo = {
  state: todoState,
  getters: todoGetters,
  actions: todoActions,
  mutations: todoMutations
};
console.log(moduleCounter, moduleTodo);
const store = new Vuex.Store({
  modules: {
    moduleCounter,
    moduleTodo
  }
});
export { store };
