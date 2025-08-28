<template>
  <BasePage>
    <div class="grid grid-cols-6 gap-5 p-5">
      <DinosaurCard
        v-for="dinosaur in dinosaurs"
        :dinosaur
        :imageUrl="dinosaur.imageUrl"
        :key="dinosaur.id"
        @click="openDinosaurModal(dinosaur)"
      />
      <DinosaurInfoModal ref="dinosaurModal" />
    </div>
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from '@/components/BasePage/BasePage.vue';
import DinosaurCard from '@/components/DinosaurCard/DinosaurCard.vue';
import { ref } from 'vue';
import dinosaursData from '@/assets/data/data.json';
import DinosaurInfoModal from '@/components/DinosaurInfoModal/DinosaurInfoModal.vue';

const dinosaurs = ref(dinosaursData);

const dinosaurModal = ref<InstanceType<typeof DinosaurInfoModal> | null>(null);

const openDinosaurModal = (dinosaur) => {
  dinosaurModal.value?.openDialog(dinosaur);
};
</script>
