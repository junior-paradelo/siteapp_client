<template>
  <main class="pt-10 background">
    <div
      class="relative w-full max-w-screen-lg mx-auto mb-4 md:mb-0"
      style="height: 24em;"
    >
      <div
        class="absolute bottom-0 left-0 z-10 w-full h-full"
        style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"
      ></div>
      <img
        v-bind:src="principal_image"
        class="absolute top-0 left-0 z-0 object-cover w-full h-full"
      />
      <div class="absolute bottom-0 left-0 z-10 p-4">
        <a
          class="inline-flex items-center justify-center px-4 py-1 mb-2 text-gray-200 bg-black"
          >#{{ site.categoryName }}</a
        >
        <h2 class="text-4xl font-semibold leading-tight text-gray-100">
          {{ site.name }}
        </h2>
        <star-rating
          v-if="login"
          :star-size="20"
          :show-rating="false"
          :animate="true"
          :active-color="['#ae0000', '#dda15e']"
          :active-border-color="['#fefae0', '#fefae0']"
          :border-width="4"
          :star-points="[
            23,
            2,
            14,
            17,
            0,
            19,
            10,
            34,
            7,
            50,
            23,
            43,
            38,
            50,
            36,
            34,
            46,
            19,
            31,
            17,
          ]"
          :active-on-click="true"
          :clearable="true"
          v-model="rating"
        ></star-rating>
        <div class="flex mt-3">
          <div>
            <p class="text-sm font-semibold text-gray-200">
              {{ site.province }} - {{ site.townHall }}
            </p>
            <p class="text-xs font-semibold text-gray-400">
              {{ site.createdAt }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-md mx-auto my-4">
      <div class="text-right">
        <a
          v-if="isAdmin"
          class="inline-flex px-6 py-2 mr-2 font-bold transition duration-200 transform border-b-2 border-blue-600 rounded cursor-pointer text-gray-800items-center hover:bg-blue-600 hover:scale-105 hover:text-white"
          @click="editSiteDetails()"
          ><span class="mr-2 ">Editar</span>
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
            ></path></svg
        ></a>
        <a
          v-if="isAdmin"
          class="inline-flex px-6 py-2 mr-2 font-bold transition duration-200 transform border-b-2 border-red-600 rounded cursor-pointer text-gray-800items-center hover:bg-red-600 hover:scale-105 hover:text-white"
          @click="deleteSiteDetails()"
          ><span class="mr-2 ">Eliminar</span
          ><svg
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
              d="M6 18L18 6M6 6l12 12"
            ></path></svg
        ></a>
        <a
          v-if="!inList && login"
          class="inline-flex items-center px-6 py-2 mr-2 font-bold transition duration-200 transform border-b-2 rounded cursor-pointer border-darkolive-500 hover:text-darkolive-300 hover:border-darkolive-300 hover:scale-105"
          @click="setTodoList()"
        >
          <span class="mr-2 text-gray-800">Pendiente</span>
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </a>
        <a
          v-if="inList && login"
          class="inline-flex items-center px-6 py-2 mr-2 font-bold transition duration-200 transform border-b-2 rounded cursor-pointer border-darkolive-500 hover:text-red-500 hover:border-darkolive-300 hover:scale-105"
          @click="setTodoList()"
        >
          <span class="mr-2 text-gray-800"
            >Eliminar de la lista de pendientes</span
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
        </a>
        <a
          v-if="login"
          class="inline-flex items-center px-6 py-2 font-bold text-yellow-500 transition duration-200 transform border-b-2 border-yellow-500 rounded cursor-pointer hover:text-yellow-400 hover:scale-105"
          @click="setFavourited()"
        >
          <span class="mr-2 text-gray-800" id="fav">Marcar como favorito</span>
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="star"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div
      class="max-w-screen-md px-4 mx-auto mt-12 text-lg leading-relaxed text-gray-700 lg:px-0"
    >
      <div
        class="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0"
      >
        <div class="flex p-4 text-justify md:w-1/2">
          {{ site.siteDetails.header }}
        </div>
        <div class="flex p-4 md:w-1/2 ">
          <aside class="mb-6 overflow-hidden rounded shadow bg-cornsilk-100">
            <h3
              class="px-4 py-3 font-medium text-gray-700 bg-gray-100 border-b"
            >
              Información importante
            </h3>
            <div class="p-4">
              <ul class="leading-loose">
                <li class="text-sm text-gray-darkest">
                  <h1 class="text-lg italic font-semibold">
                    {{ site.name }}
                  </h1>
                  <p>{{ site.province }} - {{ site.townHall }}</p>
                </li>
                <li class="inline-flex text-sm text-gray-darkest">
                  <span class="font-semibold">Valoración media usuarios:</span>
                  <star-rating
                    :star-size="10"
                    :show-rating="false"
                    :read-only="true"
                    :active-color="['#ae0000', '#dda15e']"
                    :active-border-color="['#fefae0', '#fefae0']"
                    :clearable="true"
                    :border-width="3"
                    :star-points="[
                      23,
                      2,
                      14,
                      17,
                      0,
                      19,
                      10,
                      34,
                      7,
                      50,
                      23,
                      43,
                      38,
                      50,
                      36,
                      34,
                      46,
                      19,
                      31,
                      17,
                    ]"
                    v-model="avg_rating"
                  ></star-rating>
                </li>
                <li class="inline-flex text-sm text-gray-darkest">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    ></path>
                  </svg>
                  <span class="mx-2 font-semibold">Categoría:</span>
                  {{ site.categoryName }}
                </li>
                <li class="inline-flex text-sm text-gray-darkest">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span class="mx-2 font-semibold">Coordenadas:</span>
                  {{ site.latitude }} ,
                  {{ site.longitude }}
                </li>
                <li class="inline-flex text-sm text-gray-darkest">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span class="mx-2 font-semibold"
                    >Coordenadas aparcamiento:</span
                  >
                  {{ site.latitude }} ,
                  {{ site.longitude }}
                </li>
                <li
                  class="inline-flex text-sm text-gray-darkest"
                  v-if="site.siteDetails.constraints"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                    ></path>
                  </svg>
                  <span class="mx-2 font-semibold">Restricciones:</span>
                  <p class="w-48">{{ site.siteDetails.constraints }}</p>
                </li>
                <li
                  class="inline-flex text-sm text-gray-darkest"
                  v-if="site.siteDetails.goCar"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    ></path>
                  </svg>
                  <span class="mx-2 font-semibold"
                    >Posibilidad de ir en automóvil: SI</span
                  >
                </li>
                <li
                  class="inline-flex text-sm text-gray-darkest"
                  v-if="site.siteDetails.goChildren"
                >
                  <svg
                    class="w-4 h-4"
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
                  <span class="mx-2 font-semibold"
                    >Posibilidad de ir con niños: SI</span
                  >
                </li>
                <li
                  class="inline-flex text-sm text-gray-darkest"
                  v-if="site.siteDetails.accessType"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                  <span class="mx-2 font-semibold"
                    >Indicaciones de acceso:</span
                  >
                  {{ site.siteDetails.accessType }}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <div class="pb-6">
        <div style="height: 500px; width: 100%">
          <l-map
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 100%"
          >
            <l-tile-layer :url="url" :attribution="attribution" />

            <l-marker
              v-for="marker in markers"
              :lat-lng="marker.position"
              :key="marker.id"
              class="focus:outline-none"
              :icon="marker.icon"
            >
              <l-tooltip :content="marker.text"></l-tooltip>
            </l-marker>
          </l-map>
        </div>
      </div>

      <p class="pb-6">
        {{ site.siteDetails.resume }}
      </p>

      <carousel
        class="pb-8"
        autoplay
        loop
        autoplayTimeout="8000"
        speed="5000"
        v-if="images.length > 0"
      >
        <slide v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </slide>
      </carousel>

      <!-- add comment -->
      <div
        v-if="login"
        class="flex items-center justify-center max-w-lg mx-auto my-4 rounded-lg"
      >
        <div
          class="w-full max-w-xl px-4 border-2 border-dashed rounded-lg border-fawn-400 bg-cornsilk-300 border-opacity-70"
        >
          <div class="flex flex-wrap mb-6 -mx-3">
            <h2 class="px-4 pt-3 pb-2 text-lg text-gray-800">
              Añadir un nuevo comentario
            </h2>
            <div class="w-full px-3 mt-2 mb-2 md:w-full">
              <textarea
                class="w-full h-20 px-3 py-2 font-light leading-normal placeholder-gray-700 bg-gray-100 border border-gray-400 rounded resize-none focus:outline-none focus:bg-white"
                name="body"
                placeholder="Escribe aquí tu comentario..."
                required
                v-model="comment_text"
              ></textarea>
            </div>
            <div class="flex items-start w-full px-3 md:w-full">
              <div class="-mr-1">
                <input
                  type="submit"
                  class="px-4 py-1 mr-1 font-medium tracking-wide text-gray-700 bg-white border border-gray-400 rounded-lg outline-none cursor-pointer hover:bg-gray-100"
                  value="Publicar comentario"
                  @click="post()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- list comments -->
      <h1 class="font-bold">Tablón de comentarios</h1>
      <div
        v-if="comments.length > 0"
        class="container pb-10 border-t-2 border-blue-300 border-opacity-70"
      >
        <ul class="flex flex-col items-center justify-center p-4">
          <li
            class="flex flex-row w-full mb-2"
            v-for="comment in displayedElements"
            :key="comment.id"
          >
            <div
              class="flex items-center flex-1 p-4 border-2 rounded-md select-none bg-cornsilk-300 border-fawn-200"
            >
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">{{ comment.autorName }}</div>
                <div class="text-sm italic text-gray-600">
                  {{ comment.text }}
                </div>
              </div>
              <div class="w-1/5 text-xs text-gray-600">
                {{ comment.createdAt }}
              </div>
            </div>
          </li>
        </ul>
        <div class="flex justify-center w-full mt-4">
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
      <div
        v-else
        class="container pb-10 italic font-light border-t-2 border-blue-300 border-opacity-70"
      >
        Todavía no hay comentarios en esta publicación
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import StarRating from "vue-star-rating";
import { Carousel, Slide } from "vue-carousel";
import L from "leaflet";

export default {
  data() {
    return {
      id: this.$route.params.id,
      site: "",
      zoom: 14,
      center: "",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: "",
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      markers: [],
      images: [],
      principal_image: null,
      inList: false,
      login: false,
      rating: null,
      avg_rating: null,
      isAdmin: false,
      comments: [],
      comment_text: null,
      page: 1,
      perPage: 4,
      pages: [],
      first_entry: false,
      parkingIcon: L.icon({
        iconUrl: require("@/assets/img/parking.svg"),
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 50],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76],
      }),
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    StarRating,
    Carousel,
    Slide,
  },
  methods: {
    setElements() {
      let numberOfPages = Math.ceil(this.comments.length / this.perPage);
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
    deleteSiteDetails() {
      axios
        .delete("http://localhost:8080/api/sites/delete/" + this.id, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then(() => {
          document.querySelector("#home").click();
        });
    },
    notification(group, title, text, time) {
      this.$notify(
        {
          group: group,
          title: title,
          text: text,
        },
        time
      );
    },
    editSiteDetails() {
      this.$router.push("/edit/" + this.id);
    },
    setRating() {
      axios
        .post("http://localhost:8080/api/userSite/saveState", null, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          params: {
            userId: parseInt(localStorage.getItem("userId")),
            siteId: this.id,
            state: "ONLYRATING",
            rate: this.rating,
          },
        })
        .then(() => {
          this.notification(
            "success",
            "Sitio puntuado correctamente",
            "Se ha añadido la puntuación correctamente",
            3000
          );
        });
    },
    setTodoList() {
      if (this.inList) {
        axios
          .delete("http://localhost:8080/api/userSite/delete", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            data: {
              userId: parseInt(localStorage.getItem("userId")),
              siteId: this.id,
              state: "TODISCOVER",
            },
          })
          .then(() => (this.inList = false));
      } else {
        axios
          .post("http://localhost:8080/api/userSite/saveState", null, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            params: {
              userId: parseInt(localStorage.getItem("userId")),
              siteId: this.id,
              state: "TODISCOVER",
            },
          })
          .then(() => (this.inList = true));
      }
    },
    setFavourited() {
      let fill = document.querySelector("#star").getAttribute("fill");
      if (fill == "none") {
        if (this.rating == 0 || this.rating == null) {
          this.notification(
            "info",
            "Debe puntuar el sitio",
            "Para marcar como favorito el sitio, es necesario puntuarlo previamente",
            5000
          );
        } else {
          axios.delete("http://localhost:8080/api/userSite/delete", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            params: {
              userId: parseInt(localStorage.getItem("userId")),
              siteId: this.id,
              state: "ONLYRATING",
            },
          });
          axios
            .post("http://localhost:8080/api/userSite/saveState", null, {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
              params: {
                userId: parseInt(localStorage.getItem("userId")),
                siteId: this.id,
                state: "FAVORITE",
                rate: this.rating,
              },
            })
            .then(() => {
              this.notification(
                "success",
                "Guardado exitoso",
                "Se ha añadido el sitio a su lista de favoritos correctamente",
                3000
              );
              document
                .querySelector("#star")
                .setAttribute("fill", "currentColor");
              document.querySelector("#fav").innerHTML =
                "Eliminar de favoritos";
            });
        }
      } else {
        axios
          .delete("http://localhost:8080/api/userSite/delete", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            params: {
              userId: parseInt(localStorage.getItem("userId")),
              siteId: this.id,
              state: "FAVORITE",
            },
          })
          .then(() => {
            document.querySelector("#star").setAttribute("fill", "none");
            document.querySelector("#fav").innerHTML = "Marcar como favorito";
          });
      }
    },
    loadComments() {
      axios
        .get("http://localhost:8080/api/sites/comments/" + this.id)
        .then((response) => {
          const optionsTime = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "Europe/Madrid",
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          };
          response.data.forEach((element) => {
            element.createdAt = new Date(element.createdAt).toLocaleTimeString(
              "es-ES",
              optionsTime
            );
          });
          this.comments = [];
          this.pages = [];
          this.page = 1;
          this.comments = response.data;
        });
    },
    post() {
      let json = {
        autorId: parseInt(localStorage.getItem("userId")),
        text: this.comment_text,
      };
      axios
        .post("http://localhost:8080/api/sites/comment/" + this.id, json)
        .then(() => {
          this.notification(
            "success",
            "Comentario publicado",
            "Se ha publicado el comentario correctamente",
            5000
          );
          this.comment_text = "";
          this.comments = [];
          this.loadComments();
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/downloads/", {
        params: {
          siteId: this.id,
        },
      })
      .then((response) => {
        response.data.forEach((element) => {
          this.images.push("data:image/png;base64," + element);
        });
      });
    let authority = localStorage.getItem("authority");
    if (authority == "ROLE_ADMIN") {
      this.isAdmin = true;
    }
    axios.get("http://localhost:8080/api/sites/" + this.id).then((response) => {
      this.markers = [];
      this.principal_image = "data:image/png;base64," + response.data.image;
      this.lat = response.data.latitude;
      this.long = response.data.longitude;
      this.center = latLng(response.data.latitude, response.data.longitude);
      this.markers.push({
        text: response.data.name,
        position: latLng(response.data.latitude, response.data.longitude),
        id: response.data.id,
      });
      if (
        response.data.latitudePark != null &&
        response.data.longitudePark != null
      ) {
        this.markers.push({
          text: response.data.name,
          position: latLng(
            response.data.latitudePark,
            response.data.longitudePark
          ),
          id: response.data.id,
          icon: this.parkingIcon,
        });
      }
      this.withTooltip = this.center;
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      response.data.createdAt = new Date(
        response.data.createdAt
      ).toLocaleDateString("es-ES", options);

      this.site = response.data;
    });
    axios
      .get("http://localhost:8080/api/userSite/getAVGRate", {
        params: { siteId: this.id },
      })
      .then((response) => {
        this.avg_rating = Math.ceil(response.data);
      });
    if (localStorage.getItem("userId") != null) {
      this.login = true;
      axios
        .get("http://localhost:8080/api/userSite/findByUserAndSiteId", {
          params: {
            userId: parseInt(localStorage.getItem("userId")),
            siteId: this.id,
            state: "FAVORITE",
          },
        })
        .then((response) => {
          if (response.data != "") {
            document
              .querySelector("#star")
              .setAttribute("fill", "currentColor");
            document.querySelector("#fav").innerHTML = "Eliminar de favoritos";
            this.first_entry = true;
            this.rating = response.data.rate;
          }
        });

      axios
        .get("http://localhost:8080/api/userSite/findByUserAndSiteId", {
          params: {
            userId: parseInt(localStorage.getItem("userId")),
            siteId: this.id,
            state: "TODISCOVER",
          },
        })
        .then((response) => {
          if (response.data != "") {
            this.inList = true;
          }
        });
    }
    this.loadComments();
  },
  watch: {
    comments() {
      this.setElements();
    },
    rating() {
      if (this.first_entry) {
        this.first_entry = false;
      } else {
        this.setRating();
      }
    },
  },
  computed: {
    displayedElements: function() {
      return this.paginate(this.comments);
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
