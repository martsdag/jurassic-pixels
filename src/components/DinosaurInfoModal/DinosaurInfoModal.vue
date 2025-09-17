<template>
  <BaseDialog
    :title="dinosaur.name"
    :buttons="[{ id: 0, text: 'OK', class: 'button--amber', onClick: () => closeDialog() }]"
    ref="baseDialog"
  >
    <div class="grid grid-cols-2 gap-6">
      <div class="flex flex-col gap-6">
        <div class="border-2 w-full aspect-square relative rounded-sm" :style="{ borderColor, boxShadow: shadowColor }">
          <img
            :src="dinosaur.imageUrl"
            :alt="dinosaur.name"
            decoding="async"
            class="absolute top-0 left-0 w-full h-full object-contain"
            crossorigin="anonymous"
            ref="imgEl"
            @load="onImgLoad"
            @error="onImgError"
          />
        </div>

        <div class="border-2 p-2 rounded-sm" :style="{ borderColor, boxShadow: shadowColor }">
          <p class="text-sm">{{ dinosaur.description }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="border-2 p-2 rounded-sm" :style="{ borderColor, boxShadow: shadowColor }">
          <p><strong>Type:</strong> {{ dinosaur.type }}</p>
        </div>

        <div class="border-2 p-2 rounded-sm" :style="{ borderColor, boxShadow: shadowColor }">
          <p><strong>Diet:</strong> {{ dinosaur.diet }}</p>
        </div>

        <div
          v-if="dinosaur.favorites?.length"
          class="border-2 p-2 rounded-sm"
          :style="{ borderColor, boxShadow: shadowColor }"
        >
          <p class="font-bold">Favorites:</p>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="favoriteItem in dinosaur.favorites"
              class="border-2 h-12 flex items-center justify-center p-2 rounded-sm"
              :style="{ borderColor, boxShadow: shadowColor }"
              role="img"
              :aria-label="favoriteItem.text"
              :title="favoriteItem.text"
              :key="favoriteItem.text"
            >
              <span class="text-xl">{{ favoriteItem.emoji }}</span>
            </div>
          </div>
        </div>

        <div
          v-if="dinosaur.dislikes?.length"
          class="border-2 p-2 rounded-sm"
          :style="{ borderColor, boxShadow: shadowColor }"
        >
          <p class="font-bold">Dislikes:</p>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="dislikeItem in dinosaur.dislikes"
              class="border-2 h-12 flex items-center justify-center p-2 rounded-sm"
              :style="{ borderColor, boxShadow: shadowColor }"
              :title="dislikeItem.text"
              role="img"
              :aria-label="dislikeItem.text"
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
import ColorThief from 'colorthief';

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

const borderColor = ref('#fef3c7');
const shadowColor = ref('none');

const imgEl = ref<HTMLImageElement | null>(null);

const onImgLoad = () => {
  if (!imgEl.value) {
    return;
  }

  try {
    const colorThief = new ColorThief();
    const [r, g, b] = colorThief.getColor(imgEl.value);

    borderColor.value = `rgb(${r}, ${g}, ${b})`;
    shadowColor.value = `0 5px 15px rgba(${r}, ${g}, ${b}, 0.3)`;
  } catch (e) {
    console.warn("Couldn't extract the color", e);
    borderColor.value = '#fef3c7';
    shadowColor.value = 'none';
  }
};

const onImgError = () => {
  borderColor.value = '#fef3c7';
  shadowColor.value = 'none';
};

const openDialog = (dinoData: Dinosaur) => {
  dinosaur.value = dinoData;
  baseDialog.value?.open();
};

const closeDialog = () => baseDialog.value?.close();

defineExpose({
  openDialog,
  closeDialog,
});
</script>
