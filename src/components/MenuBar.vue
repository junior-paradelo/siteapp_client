<template>
  <div class="px-4 py-4 bg-darkolive-300">
    <div
      class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
    >
      <div class="flex items-center justify-between">
        <a
          href="/"
          id="home"
          class="inline-block py-2 text-xl font-bold text-white"
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
      <div v-if="existRegisterButton" id="login_button" class="hidden md:block">
        <a
          href="/register"
          class="inline-block px-4 py-2 text-gray-700 rounded-lg bg-cornsilk-600 hover:bg-fawn-50"
          >Iniciar sesión</a
        >
      </div>
      <div v-else id="login_button" class="hidden md:block">
        <div class="relative inline-block text-left">
          <div>
            <button
              id="fake"
              v-if="isOpen"
              @click="isOpen = false"
              class="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black cursor-default opacity-20"
            ></button>
            <button
              type="button"
              class="z-10 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md shadow-sm bg-cornsilk-600 hover:bg-fawn-50 focus:outline-none"
              id="options-menu"
              @click="isOpen = !isOpen"
              @keydown.esc.exact="isOpen = false"
            >
              Opciones
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            v-if="isOpen"
            class="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg bg-cornsilk-400 ring-1 ring-black ring-opacity-5"
          >
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="/userProfile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >Administrar cuenta</a
              >
              <button
                @click="logout"
                type="submit"
                class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Desconectarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      existRegisterButton: true,
      isOpen: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("showNotify");
      document.querySelector("#home").click();
    },
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.existRegisterButton = false;
    }
  },
};
</script>

<style></style>
