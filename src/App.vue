<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: {
    Header,
  },
};
</script>
<style></style>
