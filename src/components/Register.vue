<template>
  <section class="text-gray-600 body-font">
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
            <input type="file" name="file" id="file" @change="onFileSelected" />
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
            class="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font"
          >
            Bienvenido a Galisites!
          </h1>
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
                class="relative block w-full px-3 py-3 text-gray-900 border rounded-none shadow appearance-none placeholder-darkolive-500 border-darkolive-300 rounded-t-md focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 focus:z-10 sm:text-sm"
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
                class="relative block w-full px-3 py-3 text-gray-900 border rounded-none shadow appearance-none placeholder-darkolive-500 border-darkolive-300 rounded-b-md focus:outline-none focus:ring-kombu-500 focus:border-kombu-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                v-model="password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="relative flex justify-center w-full px-4 py-3 text-sm font-medium border rounded-md text-liverdogs-500 border-liverdogs-500 hover:bg-liverdogs-300 hover:text-liverdogs-500 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: lock-closed -->
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
      username: "",
      password_r: "",
      firstname: "",
      lastname: "",
      email: "",
      selectedFile: "",
    };
  },
  methods: {
    login() {
      let json = {
        username: this.user,
        password: this.password,
      };
      axios.post("http://localhost:8080/auth", json).then((response) => {
        console.log(response);
        if (response.status == "200") {
          localStorage.setItem("token", response.data.token);
          this.$router.push("/");
        }
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
          axios
            .put(
              "http://localhost:8080/api/users/upload/" + response.data.id,
              image
            )
            .then((response) => {
              if (response.status == "200") {
                let json = {
                  username: this.username,
                  password: this.password_r,
                };
                axios
                  .post("http://localhost:8080/auth", json)
                  .then((response) => {
                    if (response.status == "200") {
                      localStorage.setItem("token", response.data.token);
                      this.$router.push("/");
                    }
                  });
              }
            });
        }
      });
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>
