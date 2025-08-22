<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col flex-1 relative">
      <LayoutDefaultHeader />
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutDefaultHeader from '@/layouts/Default/components/LayoutDefaultHeader.vue';
</script>
