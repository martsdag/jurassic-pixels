<template>
  <div
    class="w-50 h-63 bg-cover bg-center rounded-lg shadow-md flex flex-col justify-end p-4 transition-transform duration-200 ease-in-out bg-white/50 cursor-pointer hover:scale-105"
    @click="emit('click', dinosaur)"
  >
    <div class="rounded-sm p-2 text-center bg-white/80">
      <img :src="imageUrl" :alt="dinosaur.name" class="w-full h-auto object-cover rounded-sm mb-2" />
      <h3 class="text-xl font-bold mb-1 truncate" :title="dinosaur.name">{{ dinosaur.name }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  dinosaur: {
    type: Object,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const emit = defineEmits(['click']);
</script>
