<template>
  <div class="h-full px-6 py-8 background" id="lastsites">
    <div class="container flex mx-auto">
      <div class="w-full lg:w-8/12">
        <div class="flex text-center">
          <img src="../../assets/img/map_site.svg" class="w-36 h-36" />
          <h1 class="pt-10 text-xl font-bold text-gray-700 md:text-2xl">
            Últimos sitios añadidos
          </h1>
        </div>
        <div v-for="site in displayedElements" :key="site.id">
          <div class="mt-6 transition duration-500 transform hover:scale-105">
            <div
              class="max-w-4xl px-10 py-6 bg-white border-t-4 rounded-lg shadow-md border-fawn-600"
            >
              <div class="flex items-center justify-between">
                <span class="font-light text-gray-600">{{
                  site.createdAt
                }}</span
                ><a
                  @click="searchForCategory(site.category)"
                  class="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white lowercase rounded-full cursor-pointer bg-darkolive-500 hover:bg-darkolive-200"
                  >#{{ site.categoryName }}</a
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
        <div class="flex justify-center w-10/12 my-4">
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
      <div class="hidden w-4/12 lg:block">
        <div class="px-8 mt-10">
          <div
            class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white border-2 border-dashed rounded-lg shadow-md border-darkolive-50"
          >
            <h1 class="mb-4 text-xl font-bold text-gray-700">Categorías</h1>
            <div class="px-6 pb-4">
              <a
                @click="searchForCategory(category.id)"
                class="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white lowercase rounded-full cursor-pointer bg-liverdogs-500 hover:bg-liverdogs-100"
                v-for="category in categories"
                :key="category.id"
                >#{{ category.name }}</a
              >
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
  name: "LastSites",
  data: function() {
    return {
      elements: [],
      categories: null,
      page: 1,
      perPage: 5,
      pages: [],
    };
  },
  methods: {
    setElements() {
      let numberOfPages = Math.ceil(this.elements.length / this.perPage);
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
    getElements() {
      axios.get("http://localhost:8080/api/sites/last").then((response) => {
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
        this.elements = response.data;
      });
      axios
        .get("http://localhost:8080/api/sites/categories")
        .then((response) => {
          this.categories = response.data;
        });
    },
    loadDetails(siteid) {
      this.$router.push("/details/" + siteid);
    },
    searchForCategory(category) {
      axios
        .get("http://localhost:8080/api/sites/last", {
          params: { categoryId: category },
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
          this.elements = response.data;
          document.querySelector("#lastsites").classList.remove("h-full");
          document.querySelector("#lastsites").classList.add("h-screen");
        });
    },
  },
  created() {
    this.getElements();
  },
  watch: {
    elements() {
      this.setElements();
    },
  },
  computed: {
    displayedElements: function() {
      return this.paginate(this.elements);
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23929e6a' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
