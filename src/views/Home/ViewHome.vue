<template>
  <BasePage>
    <div class="fixed bottom-4 right-6 z-50">
      <BaseTooltip tooltip="Open random dinosaur" position="left">
        <BaseButton class="button--sky" @click="onClickOpenRandomDino()">
          <BaseIcon :path="mdiHelpBox" class="w-8 h-8" />
        </BaseButton>
      </BaseTooltip>
    </div>
    <div class="grid grid-cols-6 gap-5 p-15">
      <DinosaurCard
        v-for="dinosaur in dinosaurs"
        :dinosaur
        :imageUrl="dinosaur.imageUrl"
        :key="dinosaur.id"
        @click="openDinosaurInfoModal(dinosaur)"
      />
      <DinosaurInfoModal ref="dinosaurInfoModal" />
    </div>
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from '@/components/BasePage/BasePage.vue';
import DinosaurCard from '@/components/DinosaurCard/DinosaurCard.vue';
import { ref } from 'vue';
import dinosaursData from '@/assets/data/data.json';
import DinosaurInfoModal from '@/components/DinosaurInfoModal/DinosaurInfoModal.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import BaseIcon from '@/components/BaseIcon/BaseIcon.vue';
import { mdiHelpBox } from '@mdi/js';
import { getRandomDino } from '@/utils';
import type { Dinosaur } from '@/types/dinosaur';
import BaseTooltip from '@/components/BaseTooltip/BaseTooltip.vue';

const dinosaurs = ref(dinosaursData);

const dinosaurInfoModal = ref<InstanceType<typeof DinosaurInfoModal> | null>(null);

const openDinosaurInfoModal = (dinosaur: Dinosaur) => {
  dinosaurInfoModal.value?.openDialog(dinosaur);
};

const onClickOpenRandomDino = () => {
  const randomDino = getRandomDino();

  dinosaurInfoModal.value?.openDialog(randomDino);
};
</script>
