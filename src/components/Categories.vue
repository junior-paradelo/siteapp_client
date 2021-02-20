<template>
  <main class="h-screen pt-6 background" id="categoriespage">
    <div class="flex flex-col justify-center ">
      <div class="p-4 m-2 mx-auto text-center">
        <h1 class="pt-2 font-bold text-black align-middletext-xl md:text-3xl">
          Categorías
        </h1>
        <h1
          class="pt-2 italic font-thin text-black align-middletext-xl md:text-lg"
        >
          Selecciona un tema y filtrarás por las categorías principales del
          mismo
        </h1>
      </div>

      <div
        class="flex justify-center p-5 mx-auto border-2 border-gray-300 rounded w-max"
      >
        <button
          @click="getElements()"
          class="px-4 py-2 ml-3 font-bold text-white uppercase transition-all border-2 border-transparent rounded outline-none focus:outline-none bg-fawn-600 hover:border-fawn-600 hover:bg-transparent hover:text-fawn-600"
        >
          TODO
        </button>
        <button
          @click="filter('HISTORIA')"
          class="px-4 py-2 ml-3 font-bold text-white uppercase transition-all border-2 border-transparent rounded outline-none focus:outline-none bg-fawn-600 hover:border-fawn-600 hover:bg-transparent hover:text-fawn-600"
        >
          HISTORIA
        </button>
        <button
          @click="filter('NATURALEZA')"
          class="px-4 py-2 ml-3 font-bold text-white uppercase transition-all border-2 border-transparent rounded outline-none focus:outline-none bg-fawn-600 hover:border-fawn-600 hover:bg-transparent hover:text-fawn-600"
        >
          NATURALEZA
        </button>
        <button
          @click="filter('ARQUITECTURA')"
          class="px-4 py-2 ml-3 font-bold text-white uppercase transition-all border-2 border-transparent rounded outline-none focus:outline-none bg-fawn-600 hover:border-fawn-600 hover:bg-transparent hover:text-fawn-600"
        >
          ARQUITECTURA
        </button>
        <button
          @click="filter('OTROS')"
          class="px-4 py-2 ml-3 font-bold text-white uppercase transition-all border-2 border-transparent rounded outline-none focus:outline-none bg-fawn-600 hover:border-fawn-600 hover:bg-transparent hover:text-fawn-600"
        >
          OTROS
        </button>
      </div>

      <div class="mx-auto">
        <div class="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4 lg:grid-cols-6">
          <div
            class="relative h-16 mb-5 cursor-pointer w-36"
            v-for="element in categories"
            :key="element.id"
            @click="searchSites(element.id)"
          >
            <div
              class="absolute inset-0 rounded-lg shadow-md opacity-25 bg-liverdogs-500"
            ></div>
            <div
              class="absolute inset-0 transition duration-300 transform hover:scale-75"
            >
              <div
                class="w-full h-full border-2 rounded-lg shadow-md border-liverdogs-50 "
              >
                <div class="py-5 font-medium text-center">
                  <span>{{ element.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto">
        <div v-for="site in displayedElements" :key="site.id">
          <div class="mt-6">
            <div
              class="max-w-4xl px-10 py-6 bg-white border-t-4 border-double rounded-lg shadow-md border-fawn-600"
            >
              <div class="flex items-center justify-between">
                <span class="font-light text-gray-600">{{
                  site.createdAt
                }}</span
                ><span
                  class="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white lowercase rounded-full bg-darkolive-500 "
                  >#{{ site.categoryName }}</span
                >
              </div>
              <div class="mt-2">
                <a
                  @click="loadDetails(site.id)"
                  class="text-2xl font-bold text-gray-700 cursor-pointer hover:underline"
                  >{{ site.name }}</a
                >
                <p class="mt-2 text-gray-600">
                  {{ site.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mx-auto my-4">
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
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Categories",
  data: function() {
    return {
      categories: [],
      sites: [],
      page: 1,
      perPage: 5,
      pages: [],
    };
  },
  methods: {
    setElements() {
      let numberOfPages = Math.ceil(this.sites.length / this.perPage);
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
    filter(theme) {
      axios
        .get("http://localhost:8080/api/sites/categories/theme", {
          params: {
            theme: theme,
          },
        })
        .then((response) => {
          this.categories = response.data;
          this.page = 1;
          this.pages = [];
          this.sites = [];
        });
    },
    getElements() {
      axios
        .get("http://localhost:8080/api/sites/categories")
        .then((response) => {
          this.categories = response.data;
          this.page = 1;
          this.pages = [];
          this.sites = [];
        });
    },
    searchSites(categoryId) {
      axios
        .get("http://localhost:8080/api/sites/filter/category", {
          params: { categoryId: categoryId },
        })
        .then((response) => {
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          response.data.forEach((element) => {
            element.createdAt = new Date(element.createdAt).toLocaleDateString(
              "es-ES",
              options
            );
          });
          this.page = 1;
          this.pages = [];
          this.sites = response.data;
          document
            .querySelector("#categoriespage")
            .classList.remove("h-screen");
          document.querySelector("#categoriespage").classList.add("h-full");
        });
    },
    loadDetails(siteid) {
      this.$router.push("/details/" + siteid);
    },
  },
  created() {
    this.getElements();
  },
  watch: {
    sites() {
      this.setElements();
    },
  },
  computed: {
    displayedElements: function() {
      return this.paginate(this.sites);
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%237e8a56' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
