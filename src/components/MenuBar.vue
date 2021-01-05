<template>
  <div class="px-4 py-4 bg-darkolive-300">
    <div
      class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="inline-block py-2 text-xl font-bold text-white"
          ><span class="text-cornsilk-400">Galisites!</span></a
        >
        <div class="block md:hidden">
          <button
            id="threelines"
            class="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white"
          >
            <svg
              class="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <div id="menubar_button" class="hidden md:block">
          <a
            href="/seeker"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-cornsilk-500 md:mt-0"
            >Buscador</a
          >
          <a
            href="/last"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-cornsilk-500 md:mt-0"
            >Últimos sitios</a
          >
          <a
            href="#"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-cornsilk-500 md:mt-0"
            >Mapa</a
          >
          <a
            href="#"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-cornsilk-500 md:mt-0"
            >Categorías</a
          >
        </div>
      </div>
      <div id="login_button" class="hidden md:block">
        <a
          href="/register"
          class="inline-block px-4 py-2 text-gray-700 rounded-lg bg-cornsilk-600 hover:bg-fawn-50"
          >Iniciar sesión</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    if (localStorage.getItem("token") != null) {
      document.querySelector("#login_button").classList.add("hidden");
    }
  },
};
</script>

<style></style>
