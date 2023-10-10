<template>
  <div class="flex justify-between items-center menu-item">
    <span class="font-bold uppercase">{{ name }}</span>
    <div class="flex justify-center items-center icon-wrapper w-5 h-5">
      <img alt="..." class="w-3 h-3" :src="image" />
    </div>
  </div>
</template>
<script>
// import { defineProps } from 'vue';

export default {
  // Declare props in case script setup
  // const props = defineProps({
  //   name: String,
  //   image: Node
  // })
  props: {
    name: String,
    image: Node,
  },
  setup(props, context) {
    console.log(props, context);
  },
};
</script>
