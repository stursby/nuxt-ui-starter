<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import AuthLayout from '@/layouts/AuthLayout.vue'
import InputError from '@/components/InputError.vue'

defineProps<{
  status?: string
  canResetPassword: boolean
}>()

const form = useForm({
  email: '',
  password: '',
  remember: false
})

const onSubmit = () => {
  form.post(route('login'), {
    onFinish: () => form.reset('password')
  })
}
</script>

<template>
  <AuthLayout
    title="Log in to your account"
    description="Enter your email and password below to log in"
  >
    <Head title="Log in" />

    <UAlert
      v-if="status"
      :description="status"
      icon="i-lucide-circle-alert"
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

      <UFormField label="Password" :required="true">
        <UInput
          v-model="form.password"
          type="password"
          class="w-full"
          :class="{ 'input-error': form.errors.password }"
        />
        <InputError :message="form.errors.password" />
        <template #hint>
          <Link :href="route('password.request')" class="text-sm"
            >Forgot password?</Link
          >
        </template>
      </UFormField>

      <UCheckbox label="Remember me" v-model="form.remember" />

      <div class="flex">
        <UButton block type="submit" :loading="form.processing">Log in</UButton>
      </div>
    </UForm>

    <div class="mt-6 text-center text-sm">
      Don't have an account?
      <Link :href="route('register')" class="underline">Sign up</Link>
    </div>
  </AuthLayout>
</template>
