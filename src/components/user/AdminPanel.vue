<template>
  <section class="h-screen text-gray-600 body-font background">
    <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
      <div
        class="flex flex-col w-full p-8 mx-auto border rounded-lg shadow-lg bg-cornsilk-200 border-darkolive-300 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <div class="flex items-center px-4 py-2">
          <h1
            class="mb-4 text-xl font-medium text-center text-gray-900 sm:text-3xl title-font"
          >
            Panel de gestión de usuarios
          </h1>
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </div>

        <div class="field-group md:w-full">
          <div class="relative">
            <input
              type="text"
              class="w-full p-2 pl-8 bg-transparent bg-gray-200 border border-gray-200 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-fawn-500 focus:border-transparent"
              placeholder="Escriba un usuario..."
              v-model="textuser"
              @keyup.enter="searchUsers()"
            />
            <svg
              class="w-4 h-4 absolute left-2.5 top-3.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div class="w-full mt-5 border-t-2 border-kombu-400">
          <div
            v-for="(element, index) in displayedUsers"
            :key="index"
            class="flex items-center w-full px-4 py-2 font-medium text-gray-500 transition duration-150 border-b-2 border-gray-300 border-dotted hover:bg-gray-100"
          >
            <div class="flex items-center w-full">
              <div class="mx-2 -mt-1 text-black">
                {{ element.username }}
                <div class="flex pb-2 pr-2 text-xs">
                  <div class="px-2 py-1 text-gray-600 bg-gray-300 rounded-l">
                    Estado
                  </div>

                  <div
                    v-if="element.enabled"
                    class="px-2 py-1 text-green-700 bg-green-200 rounded-r"
                  >
                    Activo
                  </div>
                  <div
                    v-else
                    class="px-2 py-1 text-red-900 bg-red-200 rounded-r"
                  >
                    Bloqueado
                  </div>
                </div>
                <div
                  class="w-full -mt-1 text-xs font-normal text-gray-500 normal-case truncate"
                >
                  {{ element.firstname }} {{ element.lastname }} ({{
                    element.email
                  }})
                </div>
              </div>
            </div>
            <button
              class="p-2 mr-2 text-red-500 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white focus:outline-none"
              @click="deleteUser(index, element.id)"
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
          <div class="italic" v-if="emptyUsersResults">
            No se han encontrado resultados
          </div>
          <div class="container flex mx-auto">
            <div class="flex justify-center w-full mt-4 ">
              <a
                id="previous"
                @click="page_user--"
                v-if="page_user != 1"
                class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
              >
                Anterior
              </a>

              <a
                class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                v-for="pageNumber in pages_users.slice(
                  page_user - 1,
                  page_user + 3
                )"
                :key="pageNumber"
                @click="page_user = pageNumber"
              >
                {{ pageNumber }}
              </a>

              <a
                id="next"
                v-if="page_user < pages_users.length"
                @click="page_user++"
                class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
              >
                Siguiente
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col w-full p-8 mx-auto border rounded-lg shadow-lg bg-cornsilk-200 border-darkolive-300 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <div class="flex items-center px-4 py-2">
          <h1
            class="mb-4 text-xl font-medium text-center text-gray-900 sm:text-3xl title-font"
          >
            Panel de gestión de sitios culturales
          </h1>
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            ></path>
          </svg>
        </div>

        <div class="field-group md:w-full">
          <div class="relative">
            <input
              type="text"
              class="w-full p-2 pl-8 bg-gray-200 border border-gray-200 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-fawn-500 focus:border-transparent"
              placeholder="Escriba un sitio cultural..."
              v-model="textsite"
              @keyup.enter="searchSites()"
            />
            <svg
              class="w-4 h-4 absolute left-2.5 top-3.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div class="w-full mt-5 border-t-2 border-kombu-400">
          <div
            v-for="(element, index) in displayedSites"
            :key="index"
            class="flex items-center w-full px-4 py-2 font-medium text-gray-500 transition duration-150 border-b-2 border-gray-300 border-dotted hover:bg-gray-100"
          >
            <div class="flex items-center w-full">
              <div class="mx-2 -mt-1 text-black">
                {{ element.name }}
                <div class="flex pb-2 pr-2 text-xs">
                  <div class="px-2 py-1 text-gray-600 bg-gray-300 rounded-l">
                    Estado
                  </div>

                  <div
                    v-if="element.enabled"
                    class="px-2 py-1 text-green-700 bg-green-200 rounded-r"
                  >
                    Activo
                  </div>
                  <div
                    v-else
                    class="px-2 py-1 text-red-900 bg-red-200 rounded-r"
                  >
                    Bloqueado
                  </div>
                </div>
                <div
                  class="w-full -mt-1 text-xs font-normal text-gray-500 normal-case truncate"
                >
                  {{ element.province }} - {{ element.townHall }}
                </div>
              </div>
            </div>
            <button
              class="p-2 ml-4 mr-2 text-blue-500 border-2 border-blue-500 rounded-full focus:outline-none hover:bg-blue-500 hover:text-white"
              @click="editSite(element.id)"
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </button>
            <button
              class="p-2 mr-2 text-red-500 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white focus:outline-none"
              @click="deleteSite(index, element.id)"
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
          <div class="italic" v-if="emptySitesResults">
            No se han encontrado resultados
          </div>
          <div class="container flex mx-auto">
            <div class="flex justify-center w-full mt-4 ">
              <a
                id="previous"
                @click="page_site--"
                v-if="page_site != 1"
                class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
              >
                Anterior
              </a>

              <a
                class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
                v-for="pageNumber in pages_sites.slice(
                  page_site - 1,
                  page_site + 3
                )"
                :key="pageNumber"
                @click="page_site = pageNumber"
              >
                {{ pageNumber }}
              </a>

              <a
                id="next"
                v-if="page_site < pages_sites.length"
                @click="page_site++"
                class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
              >
                Siguiente
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  name: "AdminPanel",
  data: function() {
    return {
      textuser: null,
      textsite: null,
      page_user: 1,
      perPage: 4,
      pages_users: [],
      usersList: [],
      sitesList: [],
      emptyUsersResults: false,
      page_site: 1,
      pages_sites: [],
      emptySitesResults: false,
    };
  },
  methods: {
    searchUsers() {
      this.emptyUsersResults = false;
      if (this.textuser == null || this.textuser.trim() == "") {
        this.$notify(
          {
            group: "info",
            title: "Debe introducir un valor",
            text:
              "Debe introducir al menos un carácter para realizar la búsqueda",
          },
          3000
        );
        return;
      }
      axios
        .get("http://localhost:8080/api/users/name", {
          params: {
            username: this.textuser,
          },
        })
        .then((response) => {
          this.page_user = 1;
          this.pages_users = [];
          this.usersList = response.data;
        })
        .catch(() => {
          this.emptyUsersResults = true;
          this.usersList = [];
        });
    },
    searchSites() {
      this.emptySitesResults = false;
      if (this.textsite == null || this.textsite.trim() == "") {
        this.$notify(
          {
            group: "info",
            title: "Debe introducir un valor",
            text:
              "Debe introducir al menos un carácter para realizar la búsqueda",
          },
          3000
        );
        return;
      }
      axios
        .get("http://localhost:8080/api/sites/name", {
          params: {
            name: this.textsite,
          },
        })
        .then((response) => {
          this.page_site = 1;
          this.pages_sites = [];
          this.sitesList = response.data;
        })
        .catch(() => {
          this.emptySitesResults = true;
          this.sitesList = [];
        });
    },
    deleteUser(indexList, userId) {
      axios
        .delete("http://localhost:8080/api/users/delete/" + userId, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(() => {
          this.$delete(this.usersList, indexList);
          this.page_user = 1;
          this.pages_users = [];
        });
    },
    deleteSite(indexList, siteId) {
      axios
        .delete("http://localhost:8080/api/sites/delete/" + siteId, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(() => {
          this.$delete(this.sitesList, indexList);
          this.page_site = 1;
          this.pages_sites = [];
        });
    },
    setElements() {
      let numberOfPages = Math.ceil(this.usersList.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages_users.push(i);
      }
    },
    paginate(elements) {
      let page = this.page_user;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return elements.slice(from, to);
    },
    setSiteElements() {
      let numberOfPages = Math.ceil(this.sitesList.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages_sites.push(i);
      }
    },
    paginateSites(elements) {
      let page = this.page_site;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return elements.slice(from, to);
    },
    editSite(siteId) {
      this.$router.push("/edit/" + siteId);
    },
  },
  watch: {
    usersList() {
      this.setElements();
    },
    sitesList() {
      this.setSiteElements();
    },
  },
  computed: {
    displayedUsers: function() {
      return this.paginate(this.usersList);
    },
    displayedSites: function() {
      return this.paginateSites(this.sitesList);
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237e8a56' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
