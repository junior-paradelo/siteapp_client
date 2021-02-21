<template>
  <section class="text-gray-600 body-font background">
    <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
      <div
        class="flex flex-col w-full p-8 mt-10 border rounded-lg shadow-lg border-darkolive-300 lg:w-3/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <div class="mb-2">
          <h1
            class="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font"
          >
            Darse de alta en Galisites!
          </h1>
        </div>
        <form
          class="mb-4 md:flex md:flex-wrap md:justify-between"
          action="#"
          method="POST"
          v-on:submit.prevent="register"
          enctype="multipart/form-data"
        >
          <div class="field-group md:w-full">
            <label class="pr-2 font-semibold field-label" for="name"
              >Nombre</label
            >
            <input
              v-model="firstname"
              type="text"
              id="name"
              class="w-full px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
            />
          </div>
          <div class="field-group md:w-full">
            <label class="pr-2 font-semibold field-label" for="lastname"
              >Apellidos</label
            >
            <input
              v-model="lastname"
              type="text"
              id="lastname"
              class="w-full px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
            />
          </div>
          <div class="field-group md:w-full">
            <label class="pr-2 font-semibold field-label" for="email"
              >Correo electrónico</label
            >
            <input
              v-model="email"
              type="text"
              id="email"
              class="w-full px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
            />
          </div>
          <div class="field-group md:w-full">
            <label class="pr-2 font-semibold field-label" for="username_r"
              >Nombre usuario</label
            >
            <input
              v-model="username"
              type="text"
              id="username_r"
              class="w-full px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
            />
          </div>
          <div class="field-group md:w-full">
            <label class="pr-2 font-semibold field-label" for="password_r"
              >Contraseña</label
            >
            <input
              v-model="password_r"
              type="password"
              id="password_r"
              class="w-full px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
            />
          </div>
          <div class="field-group md:w-full">
            <label class="pr-2 font-semibold field-label" for="file"
              >Imagen</label
            >
            <input
              type="file"
              name="file"
              id="file"
              @change="onFileSelected"
              accept=".jpg, .jpeg, .png"
            />
          </div>

          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-3 mt-4 text-sm font-medium border rounded-md text-liverdogs-500 border-liverdogs-500 hover:bg-liverdogs-300 hover:text-liverdogs-500 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            Crear cuenta
          </button>
        </form>
      </div>
      <div
        class="flex flex-col w-full p-8 mt-10 border rounded-lg shadow-lg border-darkolive-300 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <div>
          <h1
            class="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl"
            id="titleLogin"
          >
            Bienvenido a Galisites!
          </h1>

          <h1
            class="hidden mb-4 text-2xl italic font-medium text-center text-gray-900 sm:text-3xl title-font"
            id="titleRestore"
          >
            Restablecer la contraseña
          </h1>
        </div>
        <form
          id="formLogin"
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
                class="relative block w-full px-3 py-3 text-gray-900 border rounded-none appearance-none placeholder-darkolive-500 border-darkolive-300 rounded-t-md focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 focus:z-10 sm:text-sm"
                placeholder="Usuario"
                v-model="user"
              />
            </div>
            <div
              class="flex w-full text-gray-900 border rounded-b-lg shadow appearance-none placeholder-darkolive-500 border-darkolive-300 focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 focus:z-10 sm:text-sm"
            >
              <label for="password" class="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="w-full px-3 py-3 text-gray-900 rounded-b-lg placeholder-darkolive-500 focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 sm:text-sm"
                placeholder="Contraseña"
                v-model="password"
              />
              <button
                id="show_btn"
                type="button"
                class="p-2 bg-white rounded text-kombu-300 focus:outline-none"
                @click="showPassword()"
              >
                <div id="eye">
                  <svg
                    class="w-6 h-6 hover:text-kombu-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <div id="eye_off" class="hidden">
                  <svg
                    class="w-6 h-6 hover:text-kombu-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div class="flex justify-end">
            <a
              @click="hiddenForm"
              class="text-sm cursor-pointer text-darkolive-300 hover:text-darkolive-700 hover:underline"
              >¿Olvidaste la contraseña?</a
            >
          </div>
          <div>
            <button
              type="submit"
              class="relative flex justify-center w-full px-4 py-3 text-sm font-medium border rounded-md text-liverdogs-500 border-liverdogs-500 hover:bg-liverdogs-300 hover:text-liverdogs-500 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="w-5 h-5 text-liverdogs-500 group-hover:text-liverdogs-500"
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
        <form
          id="formRestore"
          class="hidden mt-8 space-y-6"
          action="#"
          method="POST"
          v-on:submit.prevent="changePassword"
        >
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="username-forgot" class="sr-only">Usuario</label>
              <input
                id="username-forgot"
                name="username-forgot"
                type="text"
                required
                class="relative block w-full px-3 py-3 text-gray-900 border rounded-none shadow appearance-none placeholder-darkolive-500 border-darkolive-300 rounded-t-md focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 focus:z-10 sm:text-sm"
                placeholder="Usuario"
                v-model="user_forgot"
              />
            </div>
            <div>
              <label for="email-address-forgot" class="sr-only"
                >Correo electrónico</label
              >
              <input
                id="email-address-forgot"
                name="email-address-forgot"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full px-3 py-3 text-gray-900 border shadow appearance-none placeholder-darkolive-500 border-darkolive-300 focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
                v-model="email_forgot"
              />
            </div>
            <div>
              <label for="password-forgot" class="sr-only"
                >Nueva contraseña</label
              >
              <input
                id="password-forgot"
                name="password-forgot"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full px-3 py-3 text-gray-900 border rounded-none shadow appearance-none placeholder-darkolive-500 border-darkolive-300 rounded-b-md focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 focus:z-10 sm:text-sm"
                placeholder="Nueva contraseña"
                v-model="password_forgot"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="relative flex justify-center w-full px-4 py-3 text-sm font-medium border rounded-md text-liverdogs-500 border-liverdogs-500 hover:bg-liverdogs-300 hover:text-liverdogs-500 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </span>
              Establecer nueva contraseña
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
      user: null,
      password: null,
      username: null,
      password_r: null,
      firstname: null,
      lastname: null,
      email: null,
      selectedFile: [],
      id_user: null,
      user_forgot: null,
      password_forgot: null,
      email_forgot: null,
    };
  },
  methods: {
    showPassword() {
      let password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
      document.getElementById("eye").classList.toggle("hidden");
      document.getElementById("eye_off").classList.toggle("hidden");
    },
    onClickError() {
      this.$notify(
        {
          group: "error",
          title: "Acceso incorrecto",
          text: "El nombre o contraseña introducidos no son correctos",
        },
        3000
      );
    },
    login() {
      let json = {
        username: this.user,
        password: this.password,
      };
      axios
        .post("http://localhost:8080/api/auth", json)
        .then((response) => {
          if (response.status == "200") {
            localStorage.setItem("token", response.data.token);
            document.querySelector("#home").click();
          }
        })
        .catch(() => {
          this.onClickError();
        });
    },
    register() {
      let json = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password_r,
        email: this.email,
      };
      let image = new FormData();
      image.append("image", this.selectedFile);
      axios.post("http://localhost:8080/api/users", json).then((response) => {
        if (response.status == "200") {
          this.id_user = response.data.id;
          let json = {
            username: this.username,
            password: this.password_r,
          };
          axios
            .post("http://localhost:8080/api/auth", json)
            .then((response) => {
              if (response.status == "200") {
                localStorage.setItem("token", response.data.token);
                axios
                  .put(
                    "http://localhost:8080/api/users/upload/" + this.id_user,
                    image,
                    {
                      headers: { Authorization: localStorage.getItem("token") },
                    }
                  )
                  .then(() => {
                    document.querySelector("#home").click();
                  });
              }
            });
        }
      });
    },
    changePassword() {
      let json = {
        username: this.user_forgot,
        password: this.password_forgot,
        email: this.email_forgot,
      };
      axios
        .put("http://localhost:8080/api/users/changePassword", json)
        .then(() => {
          this.$notify(
            {
              group: "success",
              title: "Contraseña cambiada correctamente",
              text: "La contraseña ha sido restablecida correctamente.",
            },
            3000
          );
        });
    },
    hiddenForm() {
      const titleLogin = document.querySelector("#titleLogin");
      const titleRestore = document.querySelector("#titleRestore");
      const formLogin = document.querySelector("#formLogin");
      const formRestore = document.querySelector("#formRestore");

      titleLogin.classList.toggle("hidden");
      titleRestore.classList.toggle("hidden");
      formLogin.classList.toggle("hidden");
      formRestore.classList.toggle("hidden");
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23929e6a' fill-opacity='0.05' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
