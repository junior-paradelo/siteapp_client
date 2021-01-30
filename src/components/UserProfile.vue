<template>
  <div class="h-screen background">
    <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
      <div
        class="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0 "
      >
        <div
          class="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white border rounded-lg shadow-lg border-darkolive-300"
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
          class="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white border rounded-lg shadow-lg border-kombu-50 "
          style="max-width: 500px"
        >
          <div class="w-full">
            <div class="px-5 text-sm text-gray-600">
              <div class="w-full">
                <h3 class="px-4 text-lg font-bold text-center text-gray-600 ">
                  Sitios favoritos
                </h3>
                <div
                  class="w-full mt-5 border-t-2 border-kombu-400"
                  v-if="favoritedList.length == 0"
                >
                  <span class="italic text-center"
                    >Todavía no tiene ningún elemento en su "Lista de
                    favoritos".</span
                  >
                </div>
                <div
                  class="w-full mt-5 border-t-2 border-kombu-400"
                  v-if="favoritedList.length > 0"
                >
                  <div
                    v-for="(element, index) in displayedElements"
                    :key="index"
                    class="flex items-center w-full px-4 py-2 font-medium text-gray-500 transition duration-150 border-b-2 border-gray-300 border-dotted hover:bg-gray-100"
                  >
                    <div class="flex items-center w-full">
                      <div class="mx-2 -mt-1 text-black">
                        {{ element.site.name }}

                        <div
                          class="w-full -mt-1 text-xs font-normal text-gray-500 normal-case truncate"
                        >
                          {{ element.site.province }} -
                          {{ element.site.townHall }}
                        </div>
                      </div>
                      <svg
                        v-for="i in element.rate"
                        :key="i"
                        class="float-left w-3 h-3 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>

                    <button
                      class="p-2 ml-4 mr-2 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
                      @click="loadDetails(element.site.id)"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      class="p-2 mr-2 text-red-500 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white"
                      @click="deleteFavorited(index, element.site.id)"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div class="container flex mx-auto">
                    <div class="flex justify-center w-full mt-4 ">
                      <a
                        id="previous"
                        @click="page--"
                        v-if="page != 1"
                        class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                      >
                        Anterior
                      </a>

                      <a
                        class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                        v-for="pageNumber in pages.slice(page - 1, page + 3)"
                        :key="pageNumber"
                        @click="page = pageNumber"
                      >
                        {{ pageNumber }}
                      </a>

                      <a
                        id="next"
                        v-if="page < pages.length"
                        @click="page++"
                        class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                      >
                        Siguiente
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full px-5 pt-5 pb-10 mx-auto mt-2 text-gray-800 bg-white border rounded-lg shadow-lg border-kombu-50 "
          style="max-width: 500px"
        >
          <div class="w-full">
            <div class="px-5 text-sm text-gray-600">
              <div class="w-full">
                <h3 class="px-4 text-lg font-bold text-center text-gray-600 ">
                  Sitios pendientes visitar
                </h3>
                <div
                  class="w-full mt-5 border-t-2 border-kombu-400"
                  v-if="todoList.length == 0"
                >
                  <span class="italic text-center"
                    >Todavía no tiene ningún elemento "Pendiente de
                    visitar".</span
                  >
                </div>
                <div
                  class="w-full mt-5 border-t-2 border-kombu-400"
                  v-if="todoList.length > 0"
                >
                  <div
                    v-for="(element, index) in displayedTodoListElements"
                    :key="index"
                    class="flex items-center w-full px-4 py-2 font-medium text-gray-500 transition duration-150 border-b-2 border-gray-300 border-dotted hover:bg-gray-100"
                  >
                    <div class="flex items-center w-full">
                      <div class="mx-2 -mt-1 text-black">
                        {{ element.site.name }}
                        <div
                          class="w-full -mt-1 text-xs font-normal text-gray-500 normal-case truncate"
                        >
                          {{ element.site.province }} -
                          {{ element.site.townHall }}
                          <span class="ml-2 italic">{{ element.rate }}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      class="p-2 ml-4 mr-2 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
                      @click="loadDetails(element.site.id)"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      class="p-2 mr-2 text-red-500 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white"
                      @click="deleteElementTodoList(index, element.site.id)"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div class="container flex mx-auto">
                    <div class="flex justify-center w-full mt-4 ">
                      <a
                        id="previous"
                        @click="page_todo--"
                        v-if="page_todo != 1"
                        class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                      >
                        Anterior
                      </a>

                      <a
                        class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                        v-for="pageNumber in pages_todo.slice(
                          page_todo - 1,
                          page_todo + 3
                        )"
                        :key="pageNumber"
                        @click="page_todo = pageNumber"
                      >
                        {{ pageNumber }}
                      </a>

                      <a
                        id="next"
                        v-if="page_todo < pages_todo.length"
                        @click="page_todo++"
                        class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                      >
                        Siguiente
                      </a>
                    </div>
                  </div>
                </div>
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
      img: null,
      username: null,
      firstname: null,
      lastname: null,
      email: null,
      firstname_e: null,
      lastname_e: null,
      email_e: null,
      id: null,
      selectedFile: [],
      favoritedList: [],
      todoList: [],
      page: 1,
      perPage: 3,
      pages: [],
      page_todo: 1,
      pages_todo: [],
    };
  },
  methods: {
    setElements() {
      let numberOfPages = Math.ceil(this.favoritedList.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    setTodoListElements() {
      let numberOfPages = Math.ceil(this.todoList.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages_todo.push(i);
      }
    },
    paginate(elements) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return elements.slice(from, to);
    },
    paginateTodoList(elements) {
      let page = this.page_todo;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return elements.slice(from, to);
    },
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
              this.loadFavorited();
              this.loadToDoList();
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
    loadFavorited() {
      axios
        .get("http://localhost:8080/api/userSite/getSitesByUserId", {
          params: { userId: this.id, state: "FAVORITE" },
        })
        .then((response) => {
          this.favoritedList = response.data;
        });
    },
    loadToDoList() {
      axios
        .get("http://localhost:8080/api/userSite/getSitesByUserId", {
          params: { userId: this.id, state: "TODISCOVER" },
        })
        .then((response) => {
          this.todoList = response.data;
        });
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    loadDetails(siteid) {
      this.$router.push("/details/" + siteid);
    },
    deleteFavorited(indexList, siteid) {
      axios
        .delete("http://localhost:8080/api/userSite/delete", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          params: { userId: this.id, siteId: siteid, state: "FAVORITE" },
        })
        .then(() => {
          this.$delete(this.favoritedList, indexList);
          this.page = 1;
          this.pages = [];
        });
    },
    deleteElementTodoList(indexList, siteid) {
      axios
        .delete("http://localhost:8080/api/userSite/delete", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          params: { userId: this.id, siteId: siteid, state: "TODISCOVER" },
        })
        .then(() => {
          this.$delete(this.todoList, indexList);
          this.page_todo = 1;
          this.pages_todo = [];
        });
    },
  },
  created() {
    this.loadData();
  },
  watch: {
    favoritedList() {
      this.setElements();
    },
    todoList() {
      this.setTodoListElements();
    },
  },
  computed: {
    displayedElements: function() {
      return this.paginate(this.favoritedList);
    },
    displayedTodoListElements: function() {
      return this.paginateTodoList(this.todoList);
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23929e6a' fill-opacity='0.05' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
