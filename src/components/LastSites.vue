<template>
  <div class="px-6 py-8 background">
    <div class="container flex mx-auto">
      <div class="w-full lg:w-8/12">
        <div class="flex text-center">
          <img src="../assets/img/map_site.svg" class="w-36 h-36" />
          <h1 class="pt-10 text-xl font-bold text-gray-700 md:text-2xl">
            Últimos sitios añadidos
          </h1>
        </div>
        <div v-for="site in listSites" :key="site.id">
          <div class="mt-6 transition duration-500 transform hover:scale-105">
            <div
              class="max-w-4xl px-10 py-6 bg-white border-t-4 rounded-lg shadow-md border-fawn-600"
            >
              <div class="flex items-center justify-between">
                <span class="font-light text-gray-600">{{
                  site.createdAt
                }}</span
                ><a
                  href="#"
                  class="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white lowercase rounded-full bg-darkolive-500 hover:bg-darkolive-200"
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
        <div class="flex justify-center w-10/12 mt-4">
          <a
            id="previous"
            @click="goPrevious()"
            class="px-3 py-2 mx-1 text-gray-700 rounded-md"
          >
            Anterior
          </a>

          <a
            @click="search(index - 1)"
            class="px-3 py-2 mx-1 text-gray-700 bg-white rounded-md cursor-pointer hover:bg-kombu-300 hover:text-white"
            v-for="index in count"
            :key="index"
          >
            {{ index }}
          </a>

          <a
            id="next"
            @click="goNext()"
            class="px-3 py-2 mx-1 text-gray-700 rounded-md"
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
                href="#"
                class="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white lowercase rounded-full bg-liverdogs-500 hover:bg-liverdogs-100"
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
      listSites: null,
      categories: null,
      count: null,
      actualPage: null,
    };
  },
  methods: {
    goPrevious() {
      if (this.actualPage != 0) {
        this.search(this.actualPage - 1);
      }
    },
    goNext() {
      if (this.actualPage != this.count - 1) {
        this.search(this.actualPage + 1);
      }
    },
    loadDetails(siteid) {
      this.$router.push("/details/" + siteid);
    },
    search(page) {
      this.actualPage = page;
      if (page == 0) {
        console.log("entro en if");
        document
          .querySelector("#previous")
          .classList.add(
            "cursor-not-allowed",
            "hover:bg-gray-100",
            "hover:text-gray-700"
          );
        document
          .querySelector("#previous")
          .classList.remove(
            "hover:bg-kombu-300",
            "hover:text-white",
            "cursor-pointer"
          );

        document
          .querySelector("#next")
          .classList.remove("cursor-not-allowed", "hover:text-gray-700");
        document
          .querySelector("#next")
          .classList.add(
            "hover:bg-kombu-300",
            "hover:text-white",
            "cursor-pointer"
          );
      } else if (page == this.count - 1) {
        console.log("entro en elseif");
        document
          .querySelector("#next")
          .classList.add(
            "cursor-not-allowed",
            "hover:bg-gray-100",
            "hover:text-gray-700"
          );
        document
          .querySelector("#next")
          .classList.remove(
            "hover:bg-kombu-300",
            "hover:text-white",
            "cursor-pointer"
          );
        document
          .querySelector("#previous")
          .classList.add(
            "hover:bg-kombu-300",
            "hover:text-white",
            "cursor-pointer"
          );
        document
          .querySelector("#previous")
          .classList.remove("cursor-not-allowed", "hover:text-gray-700");
      } else {
        document
          .querySelector("#previous")
          .classList.add(
            "hover:bg-kombu-300",
            "hover:text-white",
            "cursor-pointer"
          );
        document
          .querySelector("#previous")
          .classList.remove("hover:text-gray-700", "cursor-not-allowed");
        document
          .querySelector("#next")
          .classList.add(
            "hover:bg-kombu-300",
            "hover:text-white",
            "cursor-pointer"
          );
        document
          .querySelector("#next")
          .classList.remove("hover:text-gray-700", "cursor-not-allowed");
      }

      axios
        .get("http://localhost:8080/api/sites/pagination", {
          params: { page: page },
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
          this.listSites = response.data;
        });
      axios
        .get("http://localhost:8080/api/sites/categories")
        .then((response) => {
          this.categories = response.data;
        });
    },
  },
  mounted() {
    axios.get("http://localhost:8080/api/sites/count").then((response) => {
      this.count = Math.ceil(response.data / 10);
    });
    this.search(0);
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23929e6a' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
