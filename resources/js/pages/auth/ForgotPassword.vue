<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import AuthLayout from '@/layouts/AuthLayout.vue'
import InputError from '@/components/InputError.vue'

defineProps<{
  status?: string
}>()

const form = useForm({
  email: ''
})

const onSubmit = () => {
  form.post(route('password.email'))
}
</script>

<template>
  <AuthLayout
    title="Forgot password"
    description="Enter your email to receive a password reset link"
  >
    <Head title="Forgot password" />

    <UAlert
      v-if="status"
      :description="status"
      icon="i-lucide-mail"
      color="neutral"
      variant="outline"
      class="mb-8"
    />

    <UForm :state="form" @submit.prevent="onSubmit" class="w-full space-y-6">
      <UFormField label="Email" :required="true">
        <UInput
          v-model="form.email"
          class="w-full"
          :class="{ 'input-error': form.errors.email }"
        />
        <InputError :message="form.errors.email" />
      </UFormField>

      <div class="flex">
        <UButton block type="submit" :loading="form.processing"
          >Email password reset link</UButton
        >
      </div>
    </UForm>

    <div class="mt-6 text-center text-sm">
      Or, return to
      <Link :href="route('login')" class="underline">log in</Link>
    </div>
  </AuthLayout>
</template>
