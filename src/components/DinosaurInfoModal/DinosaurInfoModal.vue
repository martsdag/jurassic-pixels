<template>
  <BaseDialog
    :title="dinosaur.name"
    :buttons="[{ id: 0, text: 'OK', class: 'button--amber', onClick: () => closeDialog() }]"
    ref="baseDialog"
  >
    <div class="grid grid-cols-2 gap-6">
      <div class="flex flex-col gap-6">
        <div class="border-2 border-amber-100 w-full aspect-square relative">
          <img :src="dinosaur.imageUrl" :alt="dinosaur.name" class="absolute top-0 left-0 w-full h-full" />
        </div>
        <div class="border-2 border-amber-800 p-2">
          <p class="text-sm">{{ dinosaur.description }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="border-2 border-amber-800 p-2">
          <p><strong>Type:</strong> {{ dinosaur.type }}</p>
        </div>
        <div class="border-2 border-amber-800 p-2">
          <p><strong>Diet:</strong> {{ dinosaur.diet }}</p>
        </div>

        <div v-if="dinosaur.favorites?.length" class="border-2 border-amber-800 p-2">
          <p class="font-bold">Favorites:</p>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="favoriteItem in dinosaur.favorites"
              class="border-2 border-amber-800 h-12 flex items-center justify-center p-2"
              :title="favoriteItem.text"
              :key="favoriteItem.text"
            >
              <span class="text-xl">{{ favoriteItem.emoji }}</span>
            </div>
          </div>
        </div>

        <div v-if="dinosaur.dislikes?.length" class="border-2 border-amber-800 p-2">
          <p class="font-bold">Dislikes:</p>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="dislikeItem in dinosaur.dislikes"
              class="border-2 border-amber-800 h-12 flex items-center justify-center p-2"
              :title="dislikeItem.text"
              :key="dislikeItem.text"
            >
              <span class="text-xl">{{ dislikeItem.emoji }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import BaseDialog from '@/components/BaseDialog/BaseDialog.vue';
import type { Dinosaur } from '@/types/dinosaur';
import { useTemplateRef, ref } from 'vue';

const baseDialog = useTemplateRef('baseDialog');
const dinosaur = ref<Dinosaur>({
  id: 0,
  name: '',
  imageUrl: '',
  description: '',
  type: '',
  diet: '',
  favorites: [],
  dislikes: [],
});

const openDialog = (dinoData) => {
  dinosaur.value = dinoData;
  baseDialog.value?.open();
};
const closeDialog = () => baseDialog.value?.close();

defineExpose({
  openDialog,
  closeDialog,
});
</script>
