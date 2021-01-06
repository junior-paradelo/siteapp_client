<template>
  <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
    <div
      class="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0"
    >
      <div
        class="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 border rounded-lg shadow-lg border-darkolive-300"
        style="max-width: 500px"
      >
        <div class="w-full pt-1 pb-5">
          <div
            class="w-32 h-32 mx-auto -mt-16 overflow-hidden rounded-full shadow-lg"
          >
            <img v-bind:src="img" />
          </div>
        </div>
        <div class="w-full mb-10">
          <p class="px-5 text-sm text-center text-gray-600">
            {{ email }}
          </p>
        </div>
        <div class="w-full">
          <p class="font-bold text-center text-fawn-500 text-md">
            {{ firstname }} {{ lastname }}
          </p>
          <p class="text-xs text-center text-gray-500">@{{ username }}</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0"
    >
      <div
        class="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white border rounded-lg shadow-lg border-kombu-50"
        style="max-width: 500px"
      >
        <div class="w-full mb-10">
          <div class="px-5 text-sm text-center text-gray-600">
            <div class="w-full">
              <h3 class="px-4 text-lg font-bold text-center text-gray-600">
                Sitios favoritos
              </h3>
              <div class="w-full mt-5">
                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Updated his status
                  <span class="text-sm text-gray-400">24 min ago</span>
                </a>

                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Added new profile picture
                  <span class="text-sm text-gray-400">42 min ago</span>
                </a>

                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Posted new article in <span class="font-bold">Web Dev</span>
                  <span class="text-sm text-gray-400">49 min ago</span>
                </a>

                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Edited website settings
                  <span class="text-sm text-gray-400">1 day ago</span>
                </a>

                <a
                  href="#"
                  class="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
                >
                  <img
                    src="https://pantazisoft.com/img/avatar-2.jpeg"
                    alt=""
                    class="inline-block h-6 mr-2 rounded-full shadow-md"
                  />
                  Added new rank
                  <span class="text-sm text-gray-400">5 days ago</span>
                </a>
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
  data: function() {
    return {
      img: "",
      username: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:8080/info", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          axios
            .get("http://localhost:8080/api/users/" + response.data.id)
            .then((response) => {
              console.log(response.data);
              this.img = "data:image/png;base64," + response.data.image;
              this.username = response.data.username;
              this.firstname = response.data.firstname;
              this.lastname = response.data.lastname;
              this.email = response.data.email;
            });
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style></style>
