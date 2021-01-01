<template>
  <div class="px-6 py-8">
    <div class="container flex mx-auto">
      <div class="w-full lg:w-8/12">
        <div class="flex text-center">
          <img src="../assets/img/map_site.svg" class="w-32 h-32" />
          <h1 class="pt-10 text-xl font-bold text-gray-700 md:text-2xl">
            Últimos sitios añadidos
          </h1>
          <button type="button" id="button_hidden" @click="search" hidden />
        </div>
        <div v-for="site in listSites" :key="site.id">
          <div class="mt-6 ">
            <div
              class="max-w-4xl px-10 py-6 bg-white border-t-4 border-indigo-600 rounded-lg shadow-md"
            >
              <div class="flex items-center justify-between">
                <span class="font-light text-gray-600">{{
                  site.createdAt
                }}</span
                ><a
                  href="#"
                  class="px-2 py-1 text-gray-100 lowercase bg-gray-600 rounded hover:bg-gray-500"
                  >{{ site.category }}</a
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
              <div class="flex items-center justify-between mt-4">
                <a href="#" class="text-blue-500 hover:underline">Read more</a>
                <div>
                  <a href="#" class="flex items-center"
                    ><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar"
                      class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    />
                    <h1 class="font-bold text-gray-700 hover:underline">
                      Alex John
                    </h1>
                  </a>
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
  name: "LastSites",
  data: function() {
    return {
      listSites: null,
    };
  },
  methods: {
    search() {
      axios
        .get("http://localhost:8080/api/sites", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          this.listSites = response.data;
        });
    },
  },
  mounted() {
    document.querySelector("#button_hidden").click();
  },
};
</script>

<style></style>
