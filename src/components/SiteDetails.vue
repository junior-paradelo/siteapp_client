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
        src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        class="absolute top-0 left-0 z-0 object-cover w-full h-full"
      />
      <div class="absolute bottom-0 left-0 z-20 p-4">
        <a
          href="#"
          class="inline-flex items-center justify-center px-4 py-1 mb-2 text-gray-200 bg-black"
          >{{ site.category.name }}</a
        >
        <h2 class="text-4xl font-semibold leading-tight text-gray-100">
          {{ site.name }}
        </h2>
        <div class="flex mt-3">
          <div>
            <p class="text-sm font-semibold text-gray-200">
              {{ site.province }} - {{ site.townHall }}
            </p>
            <p class="text-xs font-semibold text-gray-400">Fecha</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="max-w-screen-md px-4 mx-auto mt-12 text-lg leading-relaxed text-gray-700 lg:px-0"
    >
      <p class="pb-6">
        {{ site.siteDetails.header }}
      </p>

      <p class="pb-6">
        {{ site.siteDetails.resume }}
      </p>

      <div class="pl-4 mb-6 italic border-l-4 border-gray-500 rounded">
        {{ site.siteDetails.comment }}
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      site: "",
    };
  },
  mounted() {
    axios.get("http://localhost:8080/api/sites/" + this.id).then((response) => {
      this.site = response.data;
    });
  },
};
</script>

<style></style>
