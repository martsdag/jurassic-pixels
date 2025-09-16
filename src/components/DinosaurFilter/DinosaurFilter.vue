<template>
  <div class="flex justify-between p-4 gap-4">
    <input
      id="dino-filter"
      type="search"
      placeholder="Filter by name..."
      aria-label="Filter dinosaurs by name"
      autocomplete="off"
      enterkeyhint="search"
      class="p-2 border border-sky-300 rounded w-full"
      autocapitalize="none"
      spellcheck="false"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: '' });
</script>
