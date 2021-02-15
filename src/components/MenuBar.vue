<template>
  <div
    class="relative z-10 px-4 py-4 bg-darkolive-300 opacity-90 bg-gradient-to-r from-darkolive-200 to-kombu-600"
  >
    <div
      class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
    >
      <div class="flex items-center justify-between">
        <!-- <div class="self-center w-10 h-10 mr-2">
          <img class="self-center w-10 h-10" src="../assets/img/global.svg" />
        </div> -->
        <!--    <div class="self-center w-10 h-10 mr-2">
          <img
            class="self-center w-10 h-10"
            src="../assets/img/planet-earth.svg"
          />
        </div> -->
        <!-- <div class="self-center w-10 h-10 mr-2">
          <img
            class="self-center w-10 h-10"
            src="../assets/img/biomimetic_color.svg"
          />
        </div> -->

        <div class="self-center w-10 h-10 mr-2">
          <img class="self-center w-10 h-10" src="../assets/img/oak-leaf.svg" />
        </div>
        <a
          href="/"
          id="home"
          class="inline-block py-2 text-xl font-bold text-white"
          ><span class="text-cornsilk-400">Galisites!</span></a
        >

        <div class="block md:hidden">
          <button
            id="threelines"
            class="flex items-center px-3 py-2 border rounded text-kombu-200 border-kombu-400 hover:text-white hover:border-white focus:outline-none"
          >
            <svg
              class="w-4 h-4 fill-current"
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
        <div id="menubar_button" class="hidden md:block md:justify-center">
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
            href="/map"
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

      <div
        v-if="existRegisterButton"
        id="login_button"
        class="hidden md:block md:justify-center"
      >
        <a
          href="/register"
          class="inline-block px-4 py-2 text-gray-700 rounded-lg bg-cornsilk-600 hover:bg-fawn-50"
          >Iniciar sesión</a
        >
      </div>
      <div v-else id="login_button" class="hidden md:block">
        <div class="relative inline-block text-left ">
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
            class="absolute w-56 mt-2 rounded-md shadow-lg bg-cornsilk-400 ring-1 ring-black ring-opacity-5 md:right-0"
          >
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                class="flex items-center px-4 py-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700"
                href="/userProfile"
              >
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="mx-2 text-sm">Perfil usuario</span>
              </a>

              <a
                class="flex items-center px-4 py-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700"
                href="/adminPanel"
                v-if="isAdmin"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
                <span class="mx-2 text-sm">Panel de administración</span>
              </a>
              <a
                class="flex items-center px-4 py-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700"
                href="/newSite"
                v-if="isAdmin"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  ></path>
                </svg>
                <span class="mx-2 text-sm">Nuevo sitio</span>
              </a>

              <a
                class="flex items-center px-4 py-2 text-gray-600 rounded cursor-pointer hover:bg-gray-200 hover:text-gray-700"
                @click="logout()"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                <span class="mx-2 text-sm">Desconectarse</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      existRegisterButton: true,
      isOpen: false,
      isAdmin: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("showNotify");
      localStorage.removeItem("authority");
      localStorage.removeItem("userId");
      document.querySelector("#home").click();
    },
  },
  mounted() {
    const threelines = document.querySelector("#threelines");
    const menubar_button = document.querySelector("#menubar_button");
    const login_button = document.querySelector("#login_button");

    threelines.addEventListener("click", () => {
      menubar_button.classList.toggle("hidden");
      login_button.classList.toggle("hidden");
    });
    if (localStorage.getItem("token") != null) {
      this.existRegisterButton = false;
      axios
        .get("http://localhost:8080/api/info", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          response.data.authorities.forEach((element) => {
            if (element.authority == "ROLE_ADMIN") {
              this.isAdmin = true;
            }
            localStorage.setItem("authority", element.authority);
          });
          localStorage.setItem("userId", response.data.id);
        });
    }
  },
};
</script>

<style></style>
