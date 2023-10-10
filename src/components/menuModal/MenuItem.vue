<template>
  <div class="flex justify-between items-center menu-item">
    <span class="font-bold uppercase">{{ name }}</span>
    <div class="flex justify-center items-center icon-wrapper w-5 h-5">
      <img alt="..." class="w-3 h-3" :src="image" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    image: Node,
  },
  mounted() {
    console.log(this.props);
  },
};
</script>
