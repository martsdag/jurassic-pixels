<template>
  <BasePage>
    <div class="mt-20 flex justify-center items-center h-full">
      <DinosaurMap />
    </div>
  </BasePage>
</template>

<script setup lang="ts">
import '@/assets/styles/map.css';
import BasePage from '@/components/BasePage/BasePage.vue';
import DinosaurMap from '@/components/DinosaurMap/DinosaurMap.vue';
</script>
