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
    <div
      class="fixed bottom-0 right-0 w-5/6 max-w-sm m-8 alert-toast md:w-full"
    >
      <input type="checkbox" class="hidden" id="footertoast" />

      <label
        class="flex items-start justify-between w-full h-24 p-2 text-white rounded shadow-lg cursor-pointer bg-kombu-300 close"
        title="close"
        for="footertoast"
      >
        Toast Alert (click anywhere to close)

        <svg
          class="text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
      </label>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {};
  },
};
</script>

<style scoped>
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
}
@keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
}

.alert-toast {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*Toast close animation*/
.alert-toast input:checked ~ * {
  -webkit-animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
