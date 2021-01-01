<template>
  <div class="px-4 py-4 bg-indigo-900">
    <div
      class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="inline-block py-2 text-xl font-bold text-white"
          ><img
            class="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
        /></a>
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
            class="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-100"
            >Buscador</a
          >
          <a
            href="/last"
            class="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-100"
            >Últimos sitios</a
          >
          <a
            href="#"
            class="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-100"
            >Mapa</a
          >
          <a
            href="#"
            class="inline-block py-1 text-gray-500 md:py-4 hover:text-gray-100"
            >Categorías</a
          >
        </div>
      </div>
      <div class="hidden md:block">
        <a
          href="/register"
          class="inline-block px-4 py-2 text-gray-700 bg-white rounded-lg hover:bg-gray-100"
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
