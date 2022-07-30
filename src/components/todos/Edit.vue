<template>
  <div>
    <h1>Edit component</h1>
    <h2>Detail Todo</h2>
    <div v-if="getTodo">{{ getTodo.id }} - {{ getTodo.title }}</div>
    <div v-else-if="!getTodo">No result</div>
    <input type="text" v-model="getTodo.title" />
    <button @click="updateTodo">Update</button>
  </div>
</template>
<script>
export default {
  name: 'TodoEdit',
  props: ['id'],
  methods: {
    updateTodo: function () {
      const { getTodo } = this.$store.getters;
      this.$store.dispatch('updateTodo', getTodo);
    }
  },
  created () {
    const { getTodo } = this.$store.getters;
    const paramID = this.$route.params.id;
    if (!getTodo || getTodo.id !== paramID) {
      this.$store.dispatch('getTodoDetail', paramID);
    }
  },
  computed: {
    getTodo: function () {
      return this.$store.getters.getTodo;
    }
  }
};
</script>
