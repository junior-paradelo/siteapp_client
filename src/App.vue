<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <MenuBar></MenuBar>
    <router-view />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
export default {
  name: "app",
  components: {
    MenuBar,
  },
};
</script>
<style></style>
