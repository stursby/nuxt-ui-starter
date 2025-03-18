<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Dashboard" />
  <div class="space-y-6 p-6">
    <h1 class="text-2xl">Dashboard</h1>
    <Link method="post" :href="route('logout')" as="button">Logout</Link>
  </div>
</template>
