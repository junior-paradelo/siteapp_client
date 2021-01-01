<template>
  <section class="text-gray-600 body-font">
    <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
      <div class="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4 md:flex md:justify-between">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="firstName"
              >
                Nombre
              </label>
              <input
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div class="md:ml-2">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="lastName"
              >
                Apellido
              </label>
              <input
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Correo electrónico
            </label>
            <input
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="mb-4 md:flex md:justify-between">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password"
              >
                Contraseña
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password_r"
                type="password"
                placeholder="******************"
              />
            </div>
            <div class="md:ml-2">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="c_password"
              >
                Confirmar contraseña
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="c_password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div class="mb-6 text-center">
            <button
              class="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-indigo-900 border border-transparent rounded-md group hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
            >
              Registrar cuenta
            </button>
          </div>
          <hr class="border-t" />
        </form>
      </div>
      <div
        class="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <div>
          <img
            class="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          method="POST"
          v-on:submit.prevent="login"
        >
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Usuario</label>
              <input
                id="email-address"
                name="email"
                type="text"
                autocomplete="email"
                required
                class="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none shadow appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Usuario"
                v-model="user"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none shadow appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                v-model="password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-indigo-900 border border-transparent rounded-md group hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: lock-closed -->
                <svg
                  class="w-5 h-5 text-indigo-500 group-hover:text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  name: "Register",
  data: function() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      let json = {
        username: this.user,
        password: this.password,
      };
      axios.post("http://localhost:8080/auth", json).then((response) => {
        if (response.status == "200") {
          localStorage.setItem("token", response.data.token);
          this.$router.push("seeker");
        }
      });
    },
  },
};
</script>
