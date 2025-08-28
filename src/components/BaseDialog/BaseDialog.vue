<template>
  <dialog
    class="dialog w-[90%] max-w-[25rem] p-6 rounded-2xl shadow-xl border border-slate-100 mx-auto outline-solid outline-[0.125rem] outline-transparent outline-offset-[0.125rem] bg-white m-auto! overflow-hidden"
    ref="dialog"
    @close="onClose"
    @cancel.prevent="onClose"
  >
    <div class="dialog__inner flex flex-col h-full w-full gap-4 text-zinc-700" ref="dialogInner">
      <slot v-if="!isHiddenHeader" name="header" v-bind="{ close }">
        <div class="flex justify-between items-center mb-4">
          <span v-if="isNotNil(title)" class="text-xl font-semibold text-zinc-800">{{ title }}</span>
          <LazyBaseButton
            class="dialog__button-close cursor-pointer text-indigo-900 w-6 h-6 ms-auto hover:text-slate-950 hover:bg-slate-200 rounded-[1.5rem] focus:outline-none focus:shadow-none"
            @click="onClickCloseIcon"
          >
            <LazyBaseIcon :path="mdiClose" />
          </LazyBaseButton>
        </div>
      </slot>
      <slot v-bind="{ close }" />
      <slot v-if="!isHiddenFooter" name="footer" v-bind="{ close }">
        <div v-if="buttons.length > 0" class="flex justify-end gap-2 mt-2.5">
          <LazyBaseButton v-for="button in buttons" :class="button.class" :key="button.id" @click="button.onClick">
            {{ button.text }}
          </LazyBaseButton>
        </div>
      </slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref, defineAsyncComponent, onBeforeUnmount, useTemplateRef } from 'vue';
import { onClickOutside, useMutationObserver, useScrollLock, useToggle } from '@vueuse/core';
import { mdiClose } from '@mdi/js';
import type { FunctionCallback } from '@/types';
import { isNotNil } from '@/utils';

const LazyBaseButton = defineAsyncComponent(() => import('@/components/BaseButton'));
const LazyBaseIcon = defineAsyncComponent(() => import('@/components/BaseIcon'));

const dialog = useTemplateRef('dialog');
const dialogInner = useTemplateRef('dialogInner');

const isLocked = useScrollLock(document.body);

const toggleIsLocked = useToggle(isLocked);

interface Button {
  id: number | string;
  text: string;
  class?: string;
  onClick: FunctionCallback;
}

const props = defineProps<
  Partial<{
    title: string;
    buttons: Array<Button>;
    isHiddenHeader: boolean;
    isHiddenFooter: boolean;
  }>
>();

const emit = defineEmits<{
  open: [];
  close: [];
  confirm: [];
  cancel: [];
}>();

const buttons = computed(
  () =>
    props.buttons ?? [
      {
        id: 0,
        text: 'Cancel',
        class:
          'px-5 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 font-medium transition-colors duration-200',
        onClick: () => {
          emit('cancel');
          close();
        },
      },
      {
        id: 1,
        text: 'Confirm',
        class:
          'flex gap-4 items-center flex-row-reverse w-auto text-white font-bold cursor-pointer rounded-lg bg-indigo-500 p-2 hover:bg-indigo-400 focus:outline-2 outline-indigo-800 shadow-lg active:border border-indigo-800',
        onClick: () => {
          emit('confirm');
          close();
        },
      },
    ],
);

const isOpened = ref(Boolean(dialog.value?.open));

useMutationObserver(
  dialog,
  () => {
    isOpened.value = Boolean(dialog.value?.open);
  },
  {
    attributes: true,
  },
);

const open = () => {
  if (isOpened.value) {
    return;
  }

  dialog.value?.showModal();
  toggleIsLocked(true);
  emit('open');
};

const close = () => {
  if (!isOpened.value) {
    return;
  }

  dialog.value?.close();
  toggleIsLocked(false);
  emit('close');
};

const onClose = close;
const onClickCloseIcon = close;

onClickOutside(dialogInner, close);

onBeforeUnmount(() => toggleIsLocked(false));

defineExpose({
  open,
  close,
  isOpened,
});
</script>

<style>
.dialog {
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.33);
  }

  .dialog__inner {
    scrollbar-gutter: stable both-edges;
  }

  .dialog__button-close {
    all: unset;
  }
}
</style>
