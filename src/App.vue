<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <the-header></the-header>
    <router-link to="/">Go to HelloWorld</router-link>
    <router-link to="/counter">Go to Counter</router-link>
    <router-link to="/todos"> Go to Todos</router-link>
    <router-link to="/slot">Go to slot example </router-link>
    <router-link to="/animate">Go to animation example </router-link>
    <router-view />
  </div>
</template>

<script>
import { ref, provide } from 'vue';

import TheHeader from '@/components/TheHeader.vue';
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
  },
  components: {
    TheHeader
  },
  setup () {
    const products = ref([
      {
        id: 'p1',
        title: 'A Carpet',
        description: 'A nice looking, maybe a little bit used carpet.',
        price: 15.99
      },
      {
        id: 'p2',
        title: 'A Book',
        description: 'You can read it. Maybe you should read it.',
        price: 12.99
      }
    ]);

    function addProduct (productData) {
      const newProduct: Record<string, string> = {
        id: new Date().toISOString(),
        title: productData.title,
        description: productData.description,
        price: productData.price
      };
      products.value.push(newProduct);
    }

    provide('products', products);
    provide('addProduct', addProduct);
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
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
