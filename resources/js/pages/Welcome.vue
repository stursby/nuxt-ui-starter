<script setup lang="ts">
import { ref } from 'vue'
import type { StepperItem } from '@nuxt/ui'

const active = ref(-1)

const items = ref<StepperItem[]>([
  {
    title: 'Laravel 12',
    description: 'The PHP Framework For Web Artisans',
    icon: 'lucide-zap'
  },
  {
    title: 'Nuxt UI (Vue 3)',
    description: 'The Intuitive Vue UI Library',
    icon: 'lucide-paint-bucket'
  },
  {
    title: 'Tailwind CSS (v4)',
    description: 'Rapidly build modern websites without ever leaving your HTML',
    icon: 'lucide-wind'
  }
])
</script>

<template>
  <div class="flex items-center justify-center p-12 lg:h-screen">
    <UCard
      class="flex w-full max-w-sm flex-col overflow-hidden lg:max-w-4xl lg:flex-row-reverse"
      variant="subtle"
      :ui="{ header: '!p-0 lg:flex-[55]', body: 'lg:flex-[45] lg:p-12' }"
    >
      <template #header>
        <img src="/images/hero.png" alt="hero" />
      </template>
      <div class="space-y-6 lg:space-y-8">
        <h1 class="text-lg font-bold">Let’s get started</h1>
        <UStepper
          v-model="active"
          :items="items"
          orientation="vertical"
          size="md"
          disabled
          class="w-full"
        />
        <div class="flex gap-4">
          <UButton variant="soft" block>Log in</UButton>
          <UButton block>Register</UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>
