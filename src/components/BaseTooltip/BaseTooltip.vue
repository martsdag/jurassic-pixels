<template>
  <div class="group relative inline-block">
    <slot />
    <span v-if="tooltip" :class="tooltipClasses">
      {{ tooltip }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  tooltip: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: 'top',
    validator: (value: string) => ['top', 'bottom', 'left', 'right'].includes(value),
  },
});

const positionClasses = computed(() => {
  switch (props.position) {
    case 'top':
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    case 'bottom':
      return 'top-full left-1/2 -translate-x-1/2 mt-2';
    case 'left':
      return 'right-full top-1/2 -translate-y-1/2 mr-2';
    case 'right':
      return 'left-full top-1/2 -translate-y-1/2 ml-2';
    default:
      return '';
  }
});

const tooltipClasses = computed(() => [
  'absolute p-2 whitespace-nowrap bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  positionClasses.value,
]);
</script>
