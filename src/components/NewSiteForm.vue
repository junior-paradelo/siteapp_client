<template>
  <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
    <div
      class="flex flex-col w-full p-8 mt-10 border rounded-lg shadow-lg border-darkolive-300 md:ml-auto md:mt-0"
    >
      <div class="text-2xl font-medium text-gray-700">
        <h2>Alta sitio cultural</h2>
        <p class="mt-2 text-sm italic text-gray">
          Formulario para dar de alta un sitio cultural en la aplicación
        </p>
      </div>

      <form
        class="mt-4 mb-4 md:flex md:flex-wrap md:justify-between"
        action="#"
        method="POST"
        v-on:submit.prevent="create"
        enctype="multipart/form-data"
      >
        <div class="px-4 field-group md:w-1/3">
          <label class="pr-2 font-semibold field-label" for="name"
            >Nombre</label
          >
          <input
            v-model="name"
            type="text"
            id="name"
            maxlength="100"
            class="w-full py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="pr-2 font-semibold field-label" for="name"
            >Provincia</label
          >
          <input
            v-model="province"
            type="text"
            id="name"
            maxlength="100"
            class="w-full py-2 mt-2 mb-6 text-gray-700 border-b-2 border-dotted border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="pr-2 font-semibold field-label" for="name"
            >Municipio</label
          >
          <input
            v-model="townhall"
            type="text"
            id="name"
            maxlength="100"
            class="w-full py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="pr-2 font-semibold field-label" for="name"
            >Categoría</label
          >
          <select
            class="block w-full px-4 py-2 mt-1 border rounded-md form-select border-darkolive-200"
            v-model="category"
          >
            <option
              v-for="categori in categories"
              :value="categori.id"
              :key="categori.id"
              >{{ categori.name }}</option
            >
          </select>
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="w-full pr-2 font-semibold mr-80 field-label" for="name"
            >Coordenadas</label
          >
          <input
            v-model="latitude"
            placeholder="Latitud..."
            type="number"
            id="name"
            step="any"
            class="w-1/2 px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
          <input
            v-model="longitude"
            placeholder="Longitud..."
            type="number"
            step="any"
            id="name"
            class="w-1/2 px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="w-full pr-2 mr-56 font-semibold field-label" for="name"
            >Coordenadas aparcamiento</label
          >
          <input
            v-model="latitude_p"
            placeholder="Latitud..."
            type="number"
            id="name"
            step="any"
            class="w-1/2 px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
          <input
            v-model="longitude_p"
            placeholder="Longitud..."
            type="number"
            step="any"
            id="name"
            class="w-1/2 px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
        </div>
        <div class="px-4 field-group md:w-full">
          <label class="pr-2 font-semibold field-label" for="name"
            >Breve Descripción</label
          >
          <input
            v-model="description"
            type="text"
            id="name"
            maxlength="250"
            class="w-full py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
          />
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="pr-2 font-semibold field-label" for="name">
            <label class="font-light">Detalles del sitio: </label
            >Encabezado</label
          >
          <textarea
            placeholder="Escriba un encabezado..."
            class="flex-1 w-full p-2 text-black bg-transparent border rounded border-darkolive-200"
            rows="6"
            name="header"
            v-model="header"
          ></textarea>
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="pr-2 font-semibold field-label" for="name"
            ><label class="font-light">Detalles del sitio: </label>Resumen
            extenso</label
          >
          <textarea
            placeholder="Escriba un resumen extenso..."
            class="flex-1 w-full p-2 text-black bg-transparent border rounded border-darkolive-200"
            rows="6"
            name="resume"
            v-model="resume"
          ></textarea>
        </div>
        <div class="px-4 field-group md:w-1/3">
          <label class="pr-2 font-semibold field-label" for="name"
            ><label class="font-light">Detalles del sitio: </label
            >Comentarios</label
          >
          <textarea
            placeholder="Escriba un comentario de importancia..."
            class="flex-1 w-full p-2 text-black bg-transparent border rounded border-darkolive-200"
            rows="6"
            name="comment"
            v-model="comment"
          ></textarea>
        </div>
        <button
          type="submit"
          class="relative flex justify-center w-full px-4 py-3 mt-4 text-sm font-medium border rounded-md text-liverdogs-500 border-liverdogs-500 hover:bg-liverdogs-300 hover:text-liverdogs-500 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
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
                d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          Crear sitio de interés cultural
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: null,
      province: null,
      townhall: null,
      category: {},
      latitude: null,
      longitude: null,
      latitude_p: null,
      longitude_p: null,
      description: null,
      header: null,
      resume: null,
      comment: null,
      categories: [],
    };
  },
  methods: {
    create() {
      let json = {
        name: this.name,
        province: this.province,
        townHall: this.townhall,
        category: this.category,
        latitude: this.latitude,
        longitude: this.longitude,
        description: this.description,
        siteDetails: {
          comment: this.comment,
          header: this.header,
          resume: this.resume,
        },
        latitudePark: this.latitude_p,
        longitudePark: this.longitude_p,
      };
      axios.post("http://localhost:8080/api/sites", json).then((response) => {
        console.log(response);
      });
    },
    loadData() {
      axios
        .get("http://localhost:8080/api/sites/categories")
        .then((response) => {
          this.categories = response.data;
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style></style>
