<template>
  <ul class="w-full ml-4">
    <li class="w-full">
      <menu-item-component
        :name="menuOne.name"
        :image="menuOne.image"
      ></menu-item-component>
      <ul class="my-8 ml-4 flex flex-wrap">
        <li class="menu-nested-item" v-for="menu in menuTwo" :key="menu.name">
          <menu-item-component
            :name="menu.name"
            :image="menu.image"
          ></menu-item-component>
        </li>
      </ul>
    </li>
    <li class="w-full">
      <menu-item-component
        :name="menuOne.name"
        :image="menuOne.image"
      ></menu-item-component>
    </li>
  </ul>
</template>
<script>
import MenuItemComponent from "./MenuItem.vue";
import CommentIcon from "../assets/img/CommonIcon.svg";
import ButtonIcon from "../assets/img/ButtonIcon.svg";
export default {
  name: "menu-two-component",
  components: {
    MenuItemComponent,
  },
  data() {
    return {
      menuOne: {
        name: "Child 1",
        image: CommentIcon,
      },
      menuTwo: [
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
        {
          name: "Child21",
          image: ButtonIcon,
        },
      ],
    };
  },
};
</script>
