<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>

<template>
  <div v-show="message" class="mt-2">
    <p class="text-sm text-(--ui-error)">
      {{ message }}
    </p>
  </div>
</template>
