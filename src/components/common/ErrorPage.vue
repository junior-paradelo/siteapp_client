<template>
  <div
    class="flex items-center justify-center w-full min-h-screen bg-gray-100 background"
  >
    <div
      class="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse"
    >
      <div class="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
        <header class="mb-6">
          <h2
            class="text-4xl font-bold leading-none text-gray-400 select-none lg:text-7xl"
          >
            404.
          </h2>
          <h3 class="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
            Lo sentimos, no se ha podido encontrar la página.
          </h3>
        </header>

        <p class="max-w-sm mb-5 leading-5 md:leading-7">
          No se preocupe, a veces nosotros cometemos errores. Puede encontrar un
          montón de otras cosas en nuestra página de inicio.
        </p>

        <button
          class="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 border border-transparent rounded-lg shadow bg-darkolive-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-darkolive-600"
          @click="goHome()"
        >
          Ir a la página de inicio
        </button>
      </div>

      <div class="max-w-lg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrprPage",
  components: {},
  data: function() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%237e8a56' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
