<template>
  <BasePage>
    <main
      class="relative flex flex-col items-center justify-center min-h-screen gap-6 text-center px-4 overflow-hidden"
      role="alert"
    >
      <h1 class="relative z-10 text-9xl font-bold text-amber-200 error-heading">404</h1>

      <img
        src="/dinos/dinoNotFound.png"
        alt="Lost dinosaur"
        class="relative z-10 w-28 h-28 md:w-40 md:h-40 filter drop-shadow-lg"
      />

      <p class="relative z-10 text-3xl font-semibold text-white drop-shadow-lg pixel-font">This dinosaur is lost!</p>

      <p class="relative z-10 text-lg text-gray-200 max-w-lg leading-relaxed drop-shadow-md">
        Looks like the page you were searching for has gone extinct. But don’t worry, we still have plenty of other
        species!
      </p>

      <RouterLink
        :to="{ name: RouteName.Home }"
        class="relative z-10 flex items-center gap-2 text-white font-bold pixel-font-button cursor-pointer border-4 border-sky-300 bg-sky-700 px-6 py-3 hover:bg-sky-500 hover:scale-105 shadow-[4px_4px_0px_#000] transition-all duration-300 ease-in-out"
      >
        🦕 Back to the herd
      </RouterLink>
    </main>
  </BasePage>
</template>

<script setup lang="ts">
import { RouteName } from '@/router';
import BasePage from '@/components/BasePage/BasePage.vue';
</script>

<style scoped>
.error-heading {
  text-shadow:
    -3px -3px 0 #000,
    3px -3px 0 #000,
    -3px 3px 0 #000,
    3px 3px 0 #000;
}
</style>
