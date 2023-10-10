<template>
  <div
    :style="{ 'background-color': 'rgba(229, 249, 253, 0.80);' }"
    class="h-screen bg-green-500 p-8"
  >
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="px-2 py-1 bg-white rounded">
          <div class="font-bold text-black">
            minh nguyen
            <span class="bg-gray-400">1dev</span>
          </div>
          <div class="text-gray-400">No: 12345678</div>
        </div>
        <div>
          <img
            alt="..."
            class="w-5 mr-1"
            src="../assets/img/NavigationIcon.svg"
          />
        </div>
      </div>
      <nav class="bg-white mx-auto mt-2 rounded">
        <ul class="menu-wrapper">
          <li class="flex items-start mx-auto">
            <p class="text-gray-400 uppercase whitespace-nowrap">Menu 1</p>
            <ul class="flex ml-4 w-full">
              <menu-one-component
                v-for="menuOne in menuOneList"
                :key="menuOne.id"
                :menuOne="menuOne"
              ></menu-one-component>
            </ul>
          </li>
          <li class="flex items-start mx-auto my-8">
            <p class="text-gray-400 uppercase whitespace-nowrap">Menu 2</p>
            <menu-two-component></menu-two-component>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
.menu-wrapper {
  padding: 79px 212px;
}
.icon-wrapper {
  background-image: linear-gradient(270deg, #00bfef 10.85%, #8ee5fb 81.32%);
  border-radius: 50%;
  box-shadow: 1px 1px 12px rgba(#39d2f9, 0.5);
}
.menu-item {
  border-bottom: 1px solid #c0f1fd;
}
.menu-nested-item {
  flex-basis: calc(100% / 2 - 16px);
  flex-shrink: 0;
  &:first-child,
  &:nth-of-type(2) {
    margin-bottom: 1.5rem;
  }
  &:nth-child(2n) {
    margin-left: 2rem;
  }
}
</style>

<script>
import MenuOneComponent from "../components/MenuOne.vue";
import MenuTwoComponent from "../components/MenuTwo.vue";
export default {
  name: "menu-modal",
  components: {
    MenuOneComponent,
    MenuTwoComponent,
  },
  data() {
    return {
      menuOneList: [
        {
          id: 1,
          name: "Child 1",
          detail: "Description1",
        },
        {
          id: 2,
          name: "Child 1",
          detail: "Description1",
        },
      ],
    };
  },
};
</script>
