<template>
  <BasePage>
    <div class="mt-20 flex justify-center items-center h-full">
      <DinosaurMap />
    </div>
  </BasePage>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import 'vue-map-ui/dist/normalize.css';
import 'vue-map-ui/dist/style.css';
import 'vue-map-ui/dist/theme-all.css';
import BasePage from '@/components/BasePage/BasePage.vue';
import DinosaurMap from '@/components/DinosaurMap/DinosaurMap.vue';
</script>
