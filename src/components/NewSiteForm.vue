<template>
  <div class="background">
    <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
      <div
        class="flex flex-col w-full p-8 mt-10 bg-white border rounded-lg shadow-lg border-darkolive-300 md:ml-auto md:mt-0"
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
            <label
              class="w-full pr-2 font-semibold mr-80 field-label"
              for="name"
              >Coordenadas</label
            >
            <input
              v-model="latitude"
              placeholder="Latitud..."
              type="number"
              id="name"
              step="any"
              class="w-1/2 px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
              required
            />
            <input
              v-model="longitude"
              placeholder="Longitud..."
              type="number"
              step="any"
              id="name"
              class="w-1/2 px-4 py-2 mt-2 mb-6 text-gray-700 border-b-2 border-darkolive-200 focus:outline-none focus:border-kombu-700"
              required
            />
          </div>
          <div class="px-4 field-group md:w-1/3">
            <label
              class="w-full pr-2 mr-56 font-semibold field-label"
              for="name"
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
          <div class="px-4 field-group md:w-2/3">
            <label class="pr-2 font-semibold field-label" for="file"
              >Imagen principal</label
            >
            <input
              type="file"
              name="file"
              id="file"
              @change="onFileSelected"
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <div class="px-4 field-group md:w-2/3">
            <label class="pr-2 font-semibold field-label" for="file"
              >Imágenes complementarias</label
            >
            <input
              type="file"
              name="files"
              id="files"
              @change="onFilesSelected"
              accept=".jpg, .jpeg, .png"
              multiple
            />
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
      selectedFile: null,
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
        selectedFile: null,
        selectedFiles: null,
      };
      const image = new FormData();
      image.append("image", this.selectedFile);
      const images = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        images.append("images", this.selectedFiles[i]);
      }
      axios.post("http://localhost:8080/api/sites", json).then((response) => {
        if (response.status == "200") {
          axios
            .put(
              "http://localhost:8080/api/sites/upload/" + response.data.id,
              image,
              {
                headers: { Authorization: localStorage.getItem("token") },
              }
            )
            .then(() => {
              console.log("Imagen principal subida con éxito");
            });

          axios
            .post(
              "http://localhost:8080/api/uploads/" + response.data.id,
              images,
              {
                headers: { Authorization: localStorage.getItem("token") },
              }
            )
            .then(() => {
              console.log("Imágenes complementarias subidas con éxito");
            });
        }
      });
    },
    loadData() {
      axios
        .get("http://localhost:8080/api/sites/categories")
        .then((response) => {
          this.categories = response.data;
        });
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onFilesSelected(event) {
      this.selectedFiles = event.target.files;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23929e6a' fill-opacity='0.05' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
