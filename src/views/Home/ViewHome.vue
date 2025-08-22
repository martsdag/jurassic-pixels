<template>
  <BasePage>
    <div class="dinosaur-grid">
      <DinosaurCard v-for="dinosaur in dinosaurs" :dinosaur :key="dinosaur.id" />
    </div>
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from '@/components/BasePage/BasePage.vue';
import DinosaurCard from '@/components/DinosaurCard/DinosaurCard.vue';
import { ref } from 'vue';

const dinosaurs = ref([
  { id: 1, name: 'Stegosaurus' },
  { id: 2, name: 'Tyrannosaurus Rex' },
  { id: 3, name: 'Brontosaurus' },
  { id: 4, name: 'Brontosaurus' },
  { id: 5, name: 'Brontosaurus' },
  { id: 6, name: 'Brontosaurus' },
  { id: 7, name: 'Brontosaurus' },
  { id: 8, name: 'Brontosaurus' },
  { id: 9, name: 'Brontosaurus' },
  { id: 10, name: 'Brontosaurus' },
  { id: 11, name: 'Brontosaurus' },
  { id: 12, name: 'Stegosaurus' },
]);
</script>

<style>
.dinosaur-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 20px;
}
</style>
