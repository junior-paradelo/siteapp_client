<template>
  <main class="mt-10">
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
      <div class="absolute bottom-0 left-0 z-20 p-4">
        <a
          href="#"
          class="inline-flex items-center justify-center px-4 py-1 mb-2 text-gray-200 bg-black"
          >{{ site.category }}</a
        >
        <h2 class="text-4xl font-semibold leading-tight text-gray-100">
          {{ site.name }}
        </h2>
        <star-rating
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
          v-if="!inList && login"
          class="inline-flex items-center px-6 py-2 mr-2 font-bold border-b-2 rounded cursor-pointer border-darkolive-500 hover:text-darkolive-300 hover:border-darkolive-300"
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
          class="inline-flex items-center px-6 py-2 mr-2 font-bold border-b-2 rounded cursor-pointer border-darkolive-500 hover:text-red-500 hover:border-darkolive-300"
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
          class="inline-flex items-center px-6 py-2 font-bold text-yellow-500 border-b-2 border-yellow-500 rounded cursor-pointer hover:text-yellow-400 "
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
        <div class="flex p-4 md:w-1/2">
          <aside class="mb-6 overflow-hidden rounded shadow ">
            <h3 class="px-4 py-3 text-sm text-gray-700 bg-gray-100 border-b">
              Información detallada
            </h3>
            <div class="p-4">
              <ul class="leading-loose">
                <li class="text-sm text-gray-darkest">
                  <h1 class="italic font-extrabold">
                    {{ site.name }} - {{ site.province }} - {{ site.townHall }}
                  </h1>
                </li>
                <li class="text-sm text-gray-darkest">
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
                <li class="text-sm text-gray-darkest">
                  <span class="font-semibold">Categoría:</span>
                  {{ site.categoryName }}
                </li>
                <li class="text-sm text-gray-darkest">
                  <span class="font-semibold">Coordenadas:</span>
                  {{ site.latitude }} ,
                  {{ site.longitude }}
                </li>
                <li class="text-sm text-gray-darkest">
                  <span class="font-semibold">Coordenadas aparcamiento:</span>
                  {{ site.latitude }} ,
                  {{ site.longitude }}
                </li>
                <li class="text-sm text-gray-darkest">
                  <span class="font-semibold">Restricciones:</span>
                  {{ site.siteDetails.comment }}
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

      <div class="pl-4 mb-6 italic border-l-4 border-gray-500 rounded">
        {{ site.siteDetails.comment }}
      </div>

      <div
        class="relative mx-auto mb-6 bg-white rounded-lg shadow-2xl carousel"
      >
        <div
          class="relative w-full max-w-screen-lg overflow-hidden rounded-lg carousel-inner"
        >
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="absolute opacity-0 carousel-item" style="height:50vh;">
            <div
              class="block w-full h-full text-5xl text-center text-white bg-indigo-500"
            >
              Slide 1
            </div>
          </div>
          <label
            for="carousel-3"
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-blue-700"
            >‹</label
          >
          <label
            for="carousel-2"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-blue-700"
            >›</label
          >

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="absolute opacity-0 carousel-item" style="height:50vh;">
            <div
              class="block w-full h-full text-5xl text-center text-black bg-orange-500"
            >
              Slide 2
            </div>
          </div>
          <label
            for="carousel-1"
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-blue-700"
            >‹</label
          >
          <label
            for="carousel-3"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-blue-700"
            >›</label
          >

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="absolute opacity-0 carousel-item" style="height:50vh;">
            <div
              class="block w-full h-full text-5xl text-center text-white bg-green-500"
            >
              Slide 3
            </div>
          </div>
          <label
            for="carousel-2"
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-blue-700"
            >‹</label
          >
          <label
            for="carousel-1"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-blue-700"
            >›</label
          >

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700"
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import StarRating from "vue-star-rating";

export default {
  data() {
    return {
      id: this.$route.params.id,
      site: "",
      zoom: 14,
      lat: 0,
      long: 0,
      center: "",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: "",
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      images: null,
      principal_image: null,
      inList: false,
      login: false,
      rating: null,
      avg_rating: null,
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    StarRating,
  },
  methods: {
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
        console.log(this.rating);
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
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
</style>
