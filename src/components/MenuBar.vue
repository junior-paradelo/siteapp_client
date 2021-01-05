<template>
  <div class="px-4 py-4 bg-charcoal-600">
    <div
      class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="inline-block py-2 text-xl font-bold text-white"
          ><span class="text-green-400">Galisites!</span></a
        >
        <div class="inline-block cursor-pointer md:hidden">
          <div class="w-8 mb-2 bg-gray-400" style="height: 2px;"></div>
          <div class="w-8 mb-2 bg-gray-400" style="height: 2px;"></div>
          <div class="w-8 bg-gray-400" style="height: 2px;"></div>
        </div>
      </div>

      <div>
        <div class="hidden md:block">
          <a
            href="/seeker"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-white md:mt-0"
            >Buscador</a
          >
          <a
            href="/last"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-white md:mt-0"
            >Últimos sitios</a
          >
          <a
            href="#"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-white md:mt-0"
            >Mapa</a
          >
          <a
            href="#"
            class="block px-4 py-2 mt-4 text-sm leading-none text-white border-white rounded md:inline-block hover:border-transparent hover:text-gray-700 hover:bg-white md:mt-0"
            >Categorías</a
          >
        </div>
      </div>
      <div class="hidden md:block">
        <a
          href="/register"
          class="inline-block px-4 py-2 text-gray-700 rounded-lg bg-cray-400 hover:bg-gray-100"
          >Iniciar sesión</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
