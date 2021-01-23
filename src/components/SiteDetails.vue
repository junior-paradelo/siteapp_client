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
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  methods: {},
  mounted() {
    axios.get("http://localhost:8080/api/sites/" + this.id).then((response) => {
      this.principal_image = "data:image/png;base64," + response.data.image;
      this.lat = response.data.latitude;
      this.long = response.data.longitude;
      this.center = latLng(response.data.latitude, response.data.longitude);
      this.withTooltip = this.center;
      this.site = response.data;
    });
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
