<template>
  <BasePage>
    <div class="mt-16 mx-4 md:mx-16 mb-0 bg-sky-50/60 border-2 border-sky-400 rounded-2xl">
      <DinosaurFilter v-model="filter.filterText" />
    </div>

    <div class="fixed bottom-4 right-6 z-50">
      <BaseTooltip tooltip="Open random dinosaur" position="left">
        <BaseButton class="button--sky" @click="onClickOpenRandomDino()">
          <BaseIcon :path="mdiHelpBox" class="w-6 h-6 md:w-8 md:h-8" />
        </BaseButton>
      </BaseTooltip>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 p-5">
      <DinosaurCard
        v-for="dinosaur in filteredDinosaurs"
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
import { computed, reactive, ref } from 'vue';
import dinosaursData from '@/assets/data/data.json';
import DinosaurInfoModal from '@/components/DinosaurInfoModal/DinosaurInfoModal.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import BaseIcon from '@/components/BaseIcon/BaseIcon.vue';
import { mdiHelpBox } from '@mdi/js';
import { getRandomDino } from '@/utils';
import type { Dinosaur } from '@/types/dinosaur';
import BaseTooltip from '@/components/BaseTooltip/BaseTooltip.vue';
import DinosaurFilter from '@/components/DinosaurFilter/DinosaurFilter.vue';

const dinosaurs = ref(dinosaursData);

const dinosaurInfoModal = ref<InstanceType<typeof DinosaurInfoModal> | null>(null);

const filter = reactive({
  filterText: '',
});

const filteredDinosaurs = computed(() => {
  const filterText = filter.filterText.toLowerCase().trim();

  if (!filterText) {
    return dinosaurs.value;
  }

  return dinosaurs.value.filter((dino: Dinosaur) => dino.name.toLowerCase().includes(filterText));
});

const openDinosaurInfoModal = (dinosaur: Dinosaur) => {
  dinosaurInfoModal.value?.openDialog(dinosaur);
};

const onClickOpenRandomDino = () => {
  const randomDino = getRandomDino();

  dinosaurInfoModal.value?.openDialog(randomDino);
};
</script>
