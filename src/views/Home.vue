<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="mb-20 text-center">
        <h1
          class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
        >
          Galisites!
        </h1>
        <p
          class="mx-auto text-base leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4"
        >
          Proyecto personal de información turística y de interés de Galicia. En
          Galisites podrás descubrir la verdadera magia de Galicia a través de
          cientos de lugares que te transportarán en un viaje lleno de historia
          y naturaleza. Pretendemos diversificar el turismo y mostrar al mundo
          qué ver en Galicia.
        </p>
        <div class="flex justify-center mt-6">
          <div class="inline-flex w-16 h-1 rounded-full bg-kombu-500"></div>
        </div>
      </div>
      <div
        class="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0"
      >
        <div class="flex flex-col items-center p-4 text-center md:w-1/4">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 rounded-full text-kombu-500 bg-darkolive-50"
          >
            <svg
              class="w-9 h-9"
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
          </div>
          <div class="flex-grow">
            <h2 class="mb-3 text-lg font-medium text-gray-900 title-font">
              Buscador
            </h2>
            <p class="text-base leading-relaxed">
              Aventúrese, realice la búsqueda que lleva tiempo pensando y
              realice la escapada que tanto ha planeado en su cabeza.
            </p>
            <a
              href="/seeker"
              class="inline-flex items-center mt-3 text-liverdogs-500 hover:text-liverdogs-50"
              >Ir al buscador
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center p-4 text-center md:w-1/4">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 rounded-full text-kombu-500 bg-darkolive-50"
          >
            <svg
              class="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="mb-3 text-lg font-medium text-gray-900 title-font">
              Últimos sitios destacados
            </h2>
            <p class="text-base leading-relaxed">
              Descubra todo los sitios nuevos que puede visitar en Galicia.
              Todos llenos de encantos y pecurialidades que han sido descubierta
              hace muy poco tiempo.
            </p>
            <a
              href="/last"
              class="inline-flex items-center mt-3 text-liverdogs-500 hover:text-liverdogs-50"
              >Ir a los últimos sitios
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center p-4 text-center md:w-1/4">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 rounded-full text-kombu-500 bg-darkolive-50 "
          >
            <svg
              class="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              ></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="mb-3 text-lg font-medium text-gray-900 title-font">
              Mapa interactivo
            </h2>
            <p class="text-base leading-relaxed">
              Navege por el mapa interactivo de Galisites!, descubriendo lugares
              que no se esperaba o buscando algún sitio con encanto cerca de
              donde está.
            </p>
            <a
              class="inline-flex items-center mt-3 text-liverdogs-500 hover:text-liverdogs-50"
              >Ir al mapa
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center p-4 text-center md:w-1/4">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 rounded-full text-kombu-500 bg-darkolive-50"
          >
            <svg
              class="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="mb-3 text-lg font-medium text-gray-900 title-font">
              Categorías
            </h2>
            <p class="text-base leading-relaxed">
              Busque sitios filtrando por las categorías que más le interesen o
              le llamen la atención. Realizando así una búsqueda mucho más
              acorde a sus necesidades.
            </p>
            <a
              class="inline-flex items-center mt-3 text-liverdogs-500 hover:text-liverdogs-50"
              >Ir a las categorías
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <notificationGroup group="success">
      <div
        class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
      >
        <div class="w-full max-w-sm mt-12">
          <notification v-slot="{ notifications }">
            <div
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex items-center justify-center w-12 bg-green-800">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                  ></path>
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-green-800">{{
                    notification.title
                  }}</span>
                  <p class="text-sm text-gray-600">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {};
  },
  methods: {
    onClickSuccess() {
      this.$notify(
        {
          group: "success",
          title: "Acceso correcto",
          text: "Has accedido correctamente",
        },
        3000
      );
    },
  },
  mounted() {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("showNotify") != 0
    ) {
      this.onClickSuccess();
      localStorage.setItem("showNotify", 0);
    }
  },
};
</script>
