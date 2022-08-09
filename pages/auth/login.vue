<template>
  <div>
    <NuxtLayout name="auth">
      <div class='container max-w-sm mx-auto h-screen flex items-center'>
        <LoginModule />
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
  import LoginModule from '@/modules/auth/Login'

  export default {
    components: {
      LoginModule
    }
  }
</script>

<script setup>
  definePageMeta({
    layout: false,
  });
</script>
