<template>
  <div id="app" class="min-h-screen">
    <MenuBar></MenuBar>
    <Notification></Notification>
    <router-view />
  </div>
</template>

<script>
import MenuBar from "./components/common/MenuBar.vue";
import Notification from "./components/common/Notification.vue";

export default {
  name: "app",
  components: {
    MenuBar,
    Notification,
  },
};
</script>
<style></style>
