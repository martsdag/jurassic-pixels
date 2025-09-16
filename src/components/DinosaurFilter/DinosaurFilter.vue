<template>
  <div class="flex justify-between p-4 gap-4">
    <input
      type="text"
      placeholder="Filter by name..."
      class="p-2 border border-sky-300 rounded w-full"
      v-model="internalValue"
    />
    <BaseButton class="flex button--sky items-center justify-center" @click="emitUpdate">
      <BaseIcon :path="mdiSearchWeb" class="w-6 h-6" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseButton from '../BaseButton/BaseButton.vue';
import { mdiSearchWeb } from '@mdi/js';
import BaseIcon from '../BaseIcon/BaseIcon.vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal !== internalValue.value) {
      internalValue.value = newVal;
    }
  },
);

watch(internalValue, (newVal) => {
  emit('update:modelValue', newVal);
});

const emitUpdate = () => {
  emit('update:modelValue', internalValue.value);
};
</script>
