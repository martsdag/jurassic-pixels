<template>
  <div class="flex p-4 gap-4">
    <input
      id="dino-filter"
      type="search"
      placeholder="Filter by name..."
      aria-label="Filter dinosaurs by name"
      autocomplete="off"
      enterkeyhint="search"
      class="p-2 border border-sky-300 rounded w-full focus:outline-none focus:ring-1 focus:ring-sky-500"
      autocapitalize="none"
      spellcheck="false"
      v-model="model.filterText"
    />
    <select
      class="p-2 border border-sky-300 rounded focus:outline-none focus:ring-1 focus:ring-sky-500"
      aria-label="Sort dinosaurs"
      v-model="model.sortBy"
    >
      <option value="name">By name</option>
      <option value="type">By type</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<{ filterText: string; sortBy: string }>({
  default: () => ({
    filterText: '',
    sortBy: 'name',
  }),
});
</script>
