<template>
  <div id="seekerbg" class="h-screen background">
    <div class="flex flex-col justify-center pt-10">
      <div class="p-4 m-2 mx-auto text-center">
        <img src="../assets/img/busqueda_global.svg" class="w-full h-32" />
        <h1 class="pt-2 text-2xl font-bold text-black align-middle sm:text-3xl">
          Buscador de sitios de interés cultural
        </h1>
      </div>
      <div
        class="flex p-2 m-2 mx-auto text-center bg-white border border-gray-300 rounded-lg shadow"
      >
        <span class="flex items-center justify-end w-auto p-2 text-gray-500">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
        <input
          class="text-gray-900 placeholder-gray-500 w-96 focus:outline-none "
          type="text"
          placeholder="Escriba el nombre de algún lugar..."
          v-model="searching"
          @keyup.enter="search()"
        />
        <button
          id="search_btn"
          class="p-2 pl-4 pr-4 text-white rounded bg-fawn-900 hover:bg-fawn-600 focus:outline-none"
          @click="search()"
        >
          <p class="text-xs font-semibold">Realizar búsqueda</p>
        </button>
      </div>
      <div
        v-if="categories"
        class="p-4 m-2 mx-auto border-4 border-double rounded-md shadow-md border-fawn-700 bg-cornsilk-300"
      >
        <div class="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4 lg:grid-cols-6">
          <div v-for="category in categories" :key="category.id">
            <div>
              <input type="checkbox" :value="category.id" v-model="checkedId" />
              <span class="ml-2">{{ category.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mx-auto">
        <div class="inline-flex items-center px-4 field-group">
          <label for="children">Posibilidad de ir con niños</label>
          <select
            id="children"
            class="block w-full px-4 py-2 mt-1 border rounded-md form-select border-darkolive-200 focus:outline-none"
            @change="filterChildren($event)"
          >
            <option value="all">TODOS</option>
            <option value="true">SI</option>
            <option value="false">NO</option>
          </select>
        </div>
        <div class="inline-flex items-center px-4 field-group">
          <label for="car">Posibilidad de ir en automóvil</label>
          <select
            id="car"
            class="block w-full px-4 py-2 mt-1 border rounded-md form-select border-darkolive-200 focus:outline-none"
            @change="filterCar($event)"
          >
            <option value="all">TODOS</option>
            <option value="true">SI</option>
            <option value="false">NO</option>
          </select>
        </div>
      </div>

      <div class="container px-6 py-6 mx-auto">
        <div
          class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div v-for="site in displayedElements" :key="site.id">
            <div
              class="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md"
            >
              <div
                class="flex items-end justify-end w-full h-56 bg-cover"
                v-bind:style="{ 'background-image': 'url(' + site.image + ')' }"
              >
                <button
                  class="p-2 mx-5 -mb-4 text-white transition duration-500 transform rounded-full bg-liverdogs-600 hover:bg-liverdogs-300 focus:bg-liverdogs-300 focus:outline-none hover:scale-110"
                  @click="loadDetails(site.id)"
                >
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="px-5 py-3 bg-cornsilk-300">
                <h3 class="font-bold text-gray-900 uppercase">
                  {{ site.name }}
                </h3>
                <p>
                  {{ site.description }}
                </p>
                <span class="mt-2 italic text-gray-700"
                  >{{ site.province }} - {{ site.townHall }}</span
                ><br />
                <span
                  class="inline-block px-2 py-1 mt-1 text-xs font-bold text-white lowercase duration-300 bg-gray-800 rounded-full md:mr-2 md:px-4 opacity-90"
                  >{{ site.categoryName }}
                </span>
              </div>
            </div>
          </div>
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
</template>

<script>
import axios from "axios";
const qs = require("qs");

export default {
  name: "Seeker",
  data: function() {
    return {
      searching: null,
      listSites: [],
      categories: null,
      checkedId: [],
      page: 1,
      perPage: 8,
      pages: [],
      list_pre_filter: [],
    };
  },
  methods: {
    filterChildren(event) {
      document.querySelector("#car").value = "all";
      if (event.target.value == "all") {
        this.page = 1;
        this.pages = [];
        this.listSites = this.list_pre_filter;
        return;
      }
      let condition = event.target.value == "true";
      console.log(condition);
      this.page = 1;
      this.pages = [];
      this.listSites = this.list_pre_filter;
      if (condition != "all") {
        this.listSites = this.listSites.filter(function(element) {
          return element.siteDetails.goChildren == condition;
        });
      }
    },
    filterCar(event) {
      document.querySelector("#children").value = "all";
      if (event.target.value == "all") {
        this.page = 1;
        this.pages = [];
        this.listSites = this.list_pre_filter;
        return;
      }
      let condition = event.target.value == "true";
      console.log(condition);
      this.page = 1;
      this.pages = [];
      this.listSites = this.list_pre_filter;
      if (condition != "all") {
        this.listSites = this.listSites.filter(function(element) {
          return element.siteDetails.goCar == condition;
        });
      }
    },
    setElements() {
      let numberOfPages = Math.ceil(this.listSites.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate(elements) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return elements.slice(from, to);
    },
    search() {
      this.page = 1;
      this.pages = [];
      axios
        .get("http://localhost:8080/api/sites/filter", {
          params: {
            keyword: this.searching,
            categories: this.checkedId,
          },
          paramsSerializer: function(params) {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        })
        .then((response) => {
          document.querySelector("#seekerbg").classList.remove("h-screen");
          document.querySelector("#seekerbg").classList.add("h-full");
          response.data.forEach((element) => {
            element.image = "data:image/png;base64," + element.image;
          });
          this.listSites = response.data;
          this.list_pre_filter = this.listSites;
        });
    },
    loadDetails(siteid) {
      this.$router.push("/details/" + siteid);
    },
    loadCategories() {
      axios
        .get("http://localhost:8080/api/sites/categories")
        .then((response) => {
          this.categories = response.data;
        });
    },
  },
  created() {
    this.loadCategories();
  },
  watch: {
    listSites() {
      this.setElements();
    },
  },
  computed: {
    displayedElements: function() {
      return this.paginate(this.listSites);
    },
  },
};
</script>
<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%235a684a' fill-opacity='0.05' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
