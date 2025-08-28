<template>
  <BaseDialog
    :title="dinosaur.name"
    :buttons="[{ id: 0, text: 'OK', class: 'button--amber', onClick: () => closeDialog() }]"
    ref="baseDialog"
  >
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <img :src="dinosaur.imageUrl" :alt="dinosaur.name" class="w-full h-auto object-contain" />
      <div>
        <p class="mb-4 text-gray-700">{{ dinosaur.description }}</p>

        <div class="space-y-2">
          <p><strong>Type:</strong> {{ dinosaur.type }}</p>
          <p><strong>Diet:</strong> {{ dinosaur.diet }}</p>

          <div v-if="dinosaur.favorites?.length">
            <p><strong>Favorites:</strong></p>
            <ul class="list-disc list-inside">
              <li v-for="item in dinosaur.favorites" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div v-if="dinosaur.dislikes?.length">
            <p><strong>Dislikes:</strong></p>
            <ul class="list-disc list-inside">
              <li v-for="item in dinosaur.dislikes" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import BaseDialog from '@/components/BaseDialog/BaseDialog.vue';
import { useTemplateRef, ref } from 'vue';

const baseDialog = useTemplateRef('baseDialog');
const dinosaur = ref({});

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
