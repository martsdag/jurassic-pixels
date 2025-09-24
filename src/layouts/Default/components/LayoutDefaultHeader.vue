<template>
  <header
    class="border-b border-sky-300 p-2 bg-sky-50/70 fixed top-0 left-0 right-0 z-50 backdrop-blur flex justify-between items-center"
  >
    <div class="flex gap-4 mr-3">
      <RouterLink
        v-for="link in links"
        :to="link.to"
        activeClass="font-bold text-lg text-sky-500"
        class="text-sky-950 no-underline text-base relative hover:text-sky-600 after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[0.125rem] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
        :key="link.to.name"
      >
        {{ link.text }}
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouteName } from '@/router';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const links = computed(() => [
  { text: 'JURASSIC PIXELS', to: { name: RouteName.Home } },
  { text: 'DINOMAP', to: { name: RouteName.DinosaurMapPage } },
]);
</script>
