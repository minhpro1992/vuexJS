<template>
  <li class="flex-grow menu-item">
    <div class="flex justify-between items-center">
      <span class="font-bold uppercase">{{ menuOne.name }}</span>
      <div class="flex items-center justify-center icon-wrapper w-5 h-5">
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
export default {
  props: {
    menuOne: {
      id: Number,
      name: String,
      detail: String,
    },
  },
  mounted() {
    console.log(this.props);
  },
};
</script>
