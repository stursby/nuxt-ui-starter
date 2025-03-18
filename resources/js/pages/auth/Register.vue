<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import AuthLayout from '@/layouts/AuthLayout.vue'
import InputError from '@/components/InputError.vue'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const onSubmit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation')
  })
}
</script>

<template>
  <AuthLayout
    title="Log in to your account"
    description="Enter your email and password below to log in"
  >
    <Head title="Log in" />

    <UForm :state="form" @submit.prevent="onSubmit" class="w-full space-y-6">
      <UFormField label="Name" :required="true">
        <UInput
          v-model="form.name"
          class="w-full"
          :class="{ 'input-error': form.errors.name }"
        />
        <InputError :message="form.errors.name" />
      </UFormField>

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
      </UFormField>

      <UFormField label="Confirm Password" :required="true">
        <UInput
          v-model="form.password_confirmation"
          type="password"
          class="w-full"
          :class="{ 'input-error': form.errors.password_confirmation }"
        />
        <InputError :message="form.errors.password_confirmation" />
      </UFormField>

      <div class="flex">
        <UButton block type="submit" :loading="form.processing"
          >Create account</UButton
        >
      </div>
    </UForm>

    <div class="mt-6 text-center text-sm">
      Already have an account?
      <Link :href="route('login')" class="underline">Log in</Link>
    </div>
  </AuthLayout>
</template>
