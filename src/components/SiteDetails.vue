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
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                    ></path>
                  </svg>
                  <span class="mx-2 font-semibold">Restricciones:</span>
                  <p class="w-3/5">{{ site.siteDetails.comment }}</p>
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
                <li class="text-sm text-gray-darkest">
                  <span class="font-semibold" v-if="site.siteDetails.goChildren"
                    >Posibilidad de ir con niños: SI</span
                  >
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

            <l-marker :lat-lng="withTooltip"> </l-marker>
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
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import StarRating from "vue-star-rating";
import { Carousel, Slide } from "vue-carousel";

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
      images: [],
      principal_image: null,
      inList: false,
      login: false,
      rating: null,
      avg_rating: null,
      isAdmin: false,
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
    setTodoList() {
      if (this.inList) {
        axios
          .delete("http://localhost:8080/api/userSite/delete", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            params: {
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
      this.principal_image = "data:image/png;base64," + response.data.image;
      this.lat = response.data.latitude;
      this.long = response.data.longitude;
      this.center = latLng(response.data.latitude, response.data.longitude);
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
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237e8a56' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
