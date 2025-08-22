<template>
  <div class="dinosaur-card cursor-pointer" :style="{ backgroundImage: imageUrl }" @click="emit('click', dinosaur)">
    <div class="dinosaur-card__info">
      <h3 class="dinosaur-card__name">{{ dinosaur.name }}</h3>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  dinosaur: {
    type: Object,
    required: true,
  },
  imageUrl: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['click']);
</script>

<style scoped>
.dinosaur-card {
  width: 200px;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  transition: transform 0.2s ease-in-out;
  background-color: rgba(255, 255, 255, 0.5);
}

.dinosaur-card:hover {
  transform: scale(1.05);
}

.dinosaur-card__info {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  padding: 8px;
  text-align: center;
}

.dinosaur-card__name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 4px;
}
</style>
