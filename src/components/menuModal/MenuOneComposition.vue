<template>
  <li class="flex-grow menu-item">
    <div class="flex justify-between items-center">
      <span class="font-bold uppercase">{{ menuOne.name }}</span>
      <div
        class="flex items-center justify-center icon-wrapper w-5 h-5"
        @click="navigateTab"
      >
        <img alt="..." class="w-3 h-3" src="../assets/img/CommonIcon.svg" />
      </div>
    </div>
    <p class="text-gray-400">{{ menuOne.detail }}</p>
  </li>
</template>
<style>
.menu-item {
  &:nth-child(2n) {
    margin-left: 2rem;
  }
}
</style>
<script>
import { toRefs } from "vue";

export default {
  emits: ["navigate-tab"],
  props: {
    menuOne: {
      id: Number,
      name: String,
      detail: String,
    },
    test: String,
  },
  setup(props, context) {
    console.log(props, context);
    const menuOne = toRefs(props);
    console.log(menuOne);
    // return {
    //   menuOne,
    // };
  },
};
</script>
