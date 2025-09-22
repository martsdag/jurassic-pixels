<template>
  <TheLayout>
    <RouterView />
    <IntroModal />
  </TheLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheLayout from '@/components/TheLayout.vue';
import IntroModal from './components/IntroModal/IntroModal.vue';
</script>
