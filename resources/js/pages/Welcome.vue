<script setup lang="ts">
function hello() {
  alert('Hello from Nuxt UI')
}
</script>

<template>
  <div class="space-y-6 p-6">
    <h1 class="text-2xl">Welcome</h1>
    <UButton @click="hello">Button</UButton>
  </div>
</template>
