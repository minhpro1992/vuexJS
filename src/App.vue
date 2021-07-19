<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-link to="/">Go to HelloWorld</router-link>
    <router-link to="/counter">Go to Counter</router-link>
    <router-link to="/todos"> Go to Todos</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  getters: {
    currentRoute () {
      console.log(this.$route)
      return this.$route
    }
  },
  computed: {
    getRouteDetail () {
      return this.$store.getters.currentRoute
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
