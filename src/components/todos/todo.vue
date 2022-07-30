<template>
  <div>
    <h1>Todo Details</h1>
    <div v-if="getTodo">
      <div>Id: {{ getTodo.id }}</div>
      <div>Title: {{ getTodo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'Todo',
  props: ['id'],
  created () {
    if (
      !this.$store.getters.getTodo ||
      this.$store.getters.getTodo.id !== this.$route.params.id
    ) {
      this.$store.dispatch('getTodoDetail', this.$route.params.id);
    }
  },
  computed: {
    getTodo () {
      return this.$store.getters.getTodo;
    }
  }
};
</script>
