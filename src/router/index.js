import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'es6-promise/auto';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'intersection-observer'; // Optional
import HelloWorld from '@/components/HelloWorld';
import Counter from '@/components/counter';
import Todos from '@/components/todos';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    }
  ]
});
