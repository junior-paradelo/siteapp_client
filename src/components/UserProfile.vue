<template>
  <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
    <div
      class="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0"
    >
      <div
        class="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 border rounded-lg shadow-lg border-darkolive-300"
        style="max-width: 500px"
      >
        <div class="w-full pt-1 pb-5">
          <div
            class="w-32 h-32 mx-auto -mt-16 overflow-hidden rounded-full shadow-lg"
          >
            <img v-bind:src="img" />
          </div>
        </div>
        <div class="w-full mb-4">
          <p class="text-2xl font-bold text-center text-fawn-500">
            {{ firstname }} {{ lastname }}
          </p>
          <p class="text-sm text-center text-gray-500">
            Nombre de usuario: {{ username }}
          </p>
          <p class="px-5 text-center text-gray-600 text-md">
            Correo electrónico: {{ email }}
          </p>
        </div>
        <form
          class="border-t-2 border-gray-500 md:flex md:flex-wrap md:justify-between"
          action="#"
          method="POST"
          v-on:submit.prevent="edit"
          enctype="multipart/form-data"
        >
          <div class="mt-2 mb-2 text-xl italic field-group md:w-full">
            Formulario de edición
          </div>

          <div class="flex flex-wrap overflow-hidden">
            <div class="w-1/3 overflow-hidden">
              <label class="pr-2 italic font-semibold field-label" for="name"
                >Nombre</label
              >
            </div>

            <div class="w-2/3 overflow-hidden">
              <input
                v-model="firstname_e"
                type="text"
                id="name"
                class="w-auto py-2 mt-2 mb-2 text-gray-700 border-b-2 border-cornsilk-900 focus:outline-none focus:border-kombu-700"
              />
            </div>

            <div class="w-1/3 overflow-hidden">
              <label
                class="pr-2 italic font-semibold field-label"
                for="lastname"
                >Apellidos</label
              >
            </div>

            <div class="w-2/3 overflow-hidden">
              <input
                v-model="lastname_e"
                type="text"
                id="lastname"
                class="w-auto py-2 mt-2 mb-2 text-gray-700 border-b-2 border-cornsilk-900 focus:outline-none focus:border-kombu-700"
              />
            </div>

            <div class="w-1/3 overflow-hidden">
              <label class="pr-2 italic font-semibold field-label" for="email"
                >Correo electrónico</label
              >
            </div>

            <div class="w-2/3 overflow-hidden ">
              <input
                v-model="email_e"
                type="text"
                id="email"
                class="w-auto py-2 mt-2 mb-2 text-gray-700 border-b-2 border-cornsilk-900 focus:outline-none focus:border-kombu-700"
              />
            </div>
          </div>

          <div class="field-group md:w-full">
            <label class="pr-2 italic font-semibold field-label" for="file"
              >Imagen</label
            >
            <input
              class="mt-2"
              type="file"
              name="file"
              id="file"
              @change="onFileSelected"
            />
          </div>

          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-3 mt-4 text-sm font-medium border rounded-md text-liverdogs-500 border-liverdogs-500 hover:bg-liverdogs-300 hover:text-liverdogs-500"
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
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            Confirmar edición
          </button>
        </form>
      </div>
    </div>
    <div
      class="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0"
    >
      <div
        class="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white border rounded-lg shadow-lg border-kombu-50"
        style="max-width: 500px"
      >
        <div class="w-full">
          <div class="px-5 text-sm text-gray-600">
            <div class="w-full">
              <h3 class="px-4 text-lg font-bold text-center text-gray-600 ">
                Sitios favoritos
              </h3>
              <div class="w-full mt-5 border-t-2 border-kombu-400">
                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Updated his status
                  <span class="text-sm text-gray-400">24 min ago</span>
                </a>

                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Added new profile picture
                  <span class="text-sm text-gray-400">42 min ago</span>
                </a>

                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Posted new article in <span class="font-bold">Web Dev</span>
                  <span class="text-sm text-gray-400">49 min ago</span>
                </a>
              </div>
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
  data: function() {
    return {
      img: "",
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      firstname_e: "",
      lastname_e: "",
      email_e: "",
      id: "",
      selectedFile: "",
    };
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:8080/api/info", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          axios
            .get("http://localhost:8080/api/users/" + response.data.id)
            .then((response) => {
              this.img = "data:image/png;base64," + response.data.image;
              this.username = response.data.username;
              this.firstname = response.data.firstname;
              this.lastname = response.data.lastname;
              this.email = response.data.email;
              this.id = response.data.id;
            });
        });
    },
    edit() {
      if (
        this.email_e != "" ||
        this.firstname_e != "" ||
        this.lastname_e != ""
      ) {
        let json = {
          firstname: this.firstname_e,
          lastname: this.lastname_e,
          email: this.email_e,
        };
        let image = new FormData();
        image.append("image", this.selectedFile);
        axios
          .put("http://localhost:8080/api/users/update/" + this.id, json, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then(() => {
            if (this.selectedFile != "") {
              axios
                .put(
                  "http://localhost:8080/api/users/upload/" + this.id,
                  image,
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                )
                .then(() => {
                  this.firstname_e = "";
                  this.lastname_e = "";
                  this.email_e = "";
                  this.selectedFile = "";
                  document.querySelector("#file").value = "";
                  this.loadData();
                });
            } else {
              this.firstname_e = "";
              this.lastname_e = "";
              this.email_e = "";
              this.selectedFile = "";
              document.querySelector("#file").value = "";
              this.loadData();
            }
          });
      }
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style></style>
