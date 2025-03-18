<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import { type SharedData } from '@/types'

const page = usePage<SharedData>()

defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    class="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
  >
    <div class="flex w-full max-w-sm flex-col gap-6">
      <Link
        :href="route('home')"
        class="flex items-center gap-2 self-center text-3xl font-medium"
      >
        {{ page.props.name }}
      </Link>

      <UCard variant="subtle">
        <div class="pb-8 text-center">
          <div
            class="text-xl font-semibold text-pretty text-(--ui-text-highlighted)"
          >
            {{ title }}
          </div>
          <div class="mt-1 text-base text-pretty text-(--ui-text-muted)">
            {{ description }}
          </div>
        </div>

        <slot />
      </UCard>
    </div>
  </div>
</template>
