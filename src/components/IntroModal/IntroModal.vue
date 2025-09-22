<template>
  <BaseDialog
    :title="'Welcome to JURASSIC PIXELS! 🦖✨'"
    :buttons="[{ id: 0, text: 'OK', class: 'button--amber', onClick: () => closeDialog() }]"
    ref="baseDialog"
  >
    <p class="text-gray-700 mb-6">
      JURASSIC PIXELS is an encyclopedia website where you can find all the information about dinosaurs and their
      locations. Discover more about prehistoric giants and the places where their remains were found.
    </p>

    <div class="flex flex-col gap-4">
      <RouterLink
        :to="{ name: RouteName.Home }"
        class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        View Dinosaurs
      </RouterLink>
      <RouterLink
        :to="{ name: RouteName.DinosaurMapPage }"
        class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        View Map
      </RouterLink>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import BaseDialog from '../BaseDialog/BaseDialog.vue';
import { RouterLink } from 'vue-router';
import { RouteName } from '@/router';

const baseDialog = useTemplateRef('baseDialog');

const closeDialog = () => baseDialog.value?.close();

const openDialog = () => baseDialog.value?.open();

onMounted(() => {
  openDialog();
});
</script>
