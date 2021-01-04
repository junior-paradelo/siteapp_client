<template>
  <div class="flex flex-col justify-center pt-10 ">
    <div class="p-4 m-2 mx-auto text-center">
      <img src="../assets/img/busqueda_global.svg" class="w-full h-32" />
      <h1 class="pt-2 font-bold text-black align-middletext-xl md:text-3xl">
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
        class="text-gray-900 placeholder-gray-500 w-96 focus:outline-none"
        type="text"
        placeholder="Escriba el nombre de algún lugar..."
        v-model="searching"
      />
      <button
        id="search_btn"
        class="p-2 pl-4 pr-4 text-white bg-indigo-900 rounded hover:bg-indigo-600"
        @click="search"
      >
        <p class="text-xs font-semibold">Realizar búsqueda</p>
      </button>
    </div>
    <div class="container px-6 mx-auto">
      <div
        class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div v-for="site in listSites" :key="site.id">
          <div
            class="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md"
          >
            <div
              class="flex items-end justify-end w-full h-56 bg-cover"
              style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"
            >
              <button
                class="p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
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
            <div class="px-5 py-3">
              <h3 class="font-bold text-gray-900 uppercase">{{ site.name }}</h3>
              <p>
                {{ site.description }}
              </p>
              <span class="mt-2 italic text-gray-700"
                >{{ site.province }} - {{ site.townHall }}</span
              ><br />
              <span class="mt-2 text-gray-700">{{ site.category }} </span>
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
  name: "Seeker",
  data: function() {
    return {
      searching: "",
      listSites: null,
    };
  },
  methods: {
    search() {
      axios
        .get("http://localhost:8080/api/sites/keyword=" + this.searching)
        .then((response) => {
          console.log(response);
          this.listSites = response.data;
        });
    },
  },
};
</script>
