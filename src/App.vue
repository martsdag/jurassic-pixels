<template>
  <TheLayout>
    <RouterView />
  </TheLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheLayout from '@/components/TheLayout.vue';
</script>
