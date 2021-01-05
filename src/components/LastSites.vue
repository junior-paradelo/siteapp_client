<template>
  <div class="px-6 py-8">
    <div class="container flex mx-auto">
      <div class="w-full lg:w-8/12">
        <div class="flex text-center">
          <img src="../assets/img/map_site_green.svg" class="w-36 h-36" />
          <h1 class="pt-10 text-xl font-bold text-gray-700 md:text-2xl">
            Últimos sitios añadidos
          </h1>
          <button type="button" id="button_hidden" @click="search" hidden />
        </div>
        <div v-for="site in listSites" :key="site.id">
          <div class="mt-6 ">
            <div
              class="max-w-4xl px-10 py-6 bg-white border-t-4 rounded-lg shadow-md border-pg-100"
            >
              <div class="flex items-center justify-between">
                <span class="font-light text-gray-600">{{
                  site.createdAt
                }}</span
                ><a
                  href="#"
                  class="px-2 py-1 text-gray-100 lowercase bg-gray-600 rounded hover:bg-gray-500"
                  >{{ site.category.name }}</a
                >
              </div>
              <div class="mt-2">
                <a
                  href="#"
                  class="text-2xl font-bold text-gray-700 hover:underline"
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
      <div class="hidden w-4/12 -mx-8 lg:block">
        <div class="px-8 mt-10">
          <h1 class="mb-4 text-xl font-bold text-gray-700">Categorías</h1>
          <div
            class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md"
          >
            <ul>
              <div v-for="category in categories" :key="category.id">
                <li class="mt-2">
                  <a
                    href="#"
                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                    >{{ category.name }}</a
                  >
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div class="px-8 mt-10">
          <h1 class="mb-4 text-xl font-bold text-gray-700">
            Publicación reciente
          </h1>
          <div
            class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md"
          >
            <div class="flex items-center justify-center">
              <a
                href="#"
                class="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
                >Laravel</a
              >
            </div>
            <div class="mt-4">
              <a
                href="#"
                class="text-lg font-medium text-gray-700 hover:underline"
                >Build Your New Idea with Laravel Freamwork.</a
              >
            </div>
            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="object-cover w-8 h-8 rounded-full"
                /><a href="#" class="mx-3 text-sm text-gray-700 hover:underline"
                  >Alex John</a
                >
              </div>
              <span class="text-sm font-light text-gray-600">Jun 1, 2020</span>
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
    };
  },
  methods: {
    search() {
      axios.get("http://localhost:8080/api/sites").then((response) => {
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
    document.querySelector("#button_hidden").click();
  },
};
</script>

<style></style>
