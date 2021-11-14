<template>
  <div>
    <b-form-input
      placeholder="Enter your text"
      v-model="$store.state.moduleTodo.text"
      v-on:change="addTodo"
    ></b-form-input>
    <div>{{ $store.state.moduleTodo.text }}</div>
    <div v-if="getTodos.length < 1">
      {{ $store.dispatch('fetchTodos') }}
    </div>
    <div v-else-if="getTodos.length > 0">
      <div v-for="todo in getTodos" v-bind:key="todo.id">
        <router-link v-bind:to="{ name: 'Todo', params: { id: todo.id } }">
          Id: {{ todo.id }} - title: {{ todo.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import { actions } from './actions';
import { state } from './state';
import { mutations } from './mutations';
import { getters } from './getters';
export { state, actions, mutations, getters };
export default {
  name: 'Todos',
  computed: {
    ...mapGetters(['getTodos', 'getText'])
  },
  methods: mapActions(['fetchTodos', 'addTodo'])
};
</script>
