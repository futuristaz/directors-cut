<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string
  placeholder?: string
  type?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-xs tracking-widest text-primary uppercase font-label">
      {{ label }}
    </label>

    <div class="relative">
      <div
        v-if="$slots.icon"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      >
        <slot name="icon" />
      </div>

      <input
        :type="type || 'text'"
        :value="modelValue"
        :placeholder="placeholder"
        @input="onInput"
        :class="[
          'bg-surface-lowest text-outline-variant font-body text-sm tracking-wider rounded-md py-3 pr-3 border border-surface-low focus:outline-none focus:border-outline-variant placeholder:text-gray-500',
          $slots.icon ? 'pl-10' : 'pl-3'
        ]"
      />
    </div>
  </div>
</template>