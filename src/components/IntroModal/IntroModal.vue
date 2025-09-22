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
      <BaseButton class="button--sky" @click="onClickViewDinosaurs">View Dinosaurs</BaseButton>
      <BaseButton class="button--amber" @click="onClickViewMap">View Map</BaseButton>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { RouteName } from '@/router';
import { nextTick, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';
import BaseDialog from '../BaseDialog/BaseDialog.vue';
import BaseButton from '../BaseButton/BaseButton.vue';

const baseDialog = useTemplateRef('baseDialog');

const router = useRouter();

const hasSeenIntro = localStorage.getItem('introSeen');

const openDialog = () => {
  baseDialog.value?.open();
};

const closeDialog = () => {
  baseDialog.value?.close();
  localStorage.setItem('introSeen', 'true');
};

if (!hasSeenIntro) {
  openDialog();
}

const onClickViewDinosaurs = () => {
  closeDialog();
  router.push({ name: RouteName.Home });
};

const onClickViewMap = () => {
  closeDialog();
  router.push({ name: RouteName.DinosaurMapPage });
};

if (!hasSeenIntro) {
  nextTick(() => {
    openDialog();
  });
}

defineExpose({
  openDialog,
  closeDialog,
});
</script>
