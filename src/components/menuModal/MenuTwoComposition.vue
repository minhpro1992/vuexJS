<template>
  <ul class="w-full ml-4">
    <li class="w-full">
      <menu-item-composition-component
        :name="menuOne.name"
        :image="menuOne.image"
      ></menu-item-composition-component>
      <ul class="my-8 ml-4 flex flex-wrap">
        <li class="menu-nested-item" v-for="menu in menuTwo" :key="menu.name">
          <menu-item-composition-component
            :name="menu.name"
            :image="menu.image"
          ></menu-item-composition-component>
        </li>
      </ul>
    </li>
    <li class="w-full">
      <menu-item-composition-component
        :name="menuOne.name"
        :image="menuOne.image"
      ></menu-item-composition-component>
    </li>
  </ul>
</template>
<script>
import MenuItemCompositionComponent from "./MenuItemComposition.vue";
import CommentIcon from "../assets/img/CommonIcon.svg";
import ButtonIcon from "../assets/img/ButtonIcon.svg";
import { reactive } from "vue";
export default {
  setup() {
    const menuOne = reactive({
      name: "Child 1",
      image: CommentIcon,
    });
    const menuTwo = reactive([
      {
        name: "Child211",
        image: ButtonIcon,
      },
      {
        name: "Child21",
        image: ButtonIcon,
      },
      {
        name: "Child21",
        image: ButtonIcon,
      },
      {
        name: "Child21",
        image: ButtonIcon,
      },
    ]);
    return {
      menuOne,
      menuTwo,
      MenuItemCompositionComponent,
    };
  },
};
</script>
