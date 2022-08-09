<template>
  <FormKit
    type="form"
    submit-label="Login"
    @submit="submitHandler"
    :actions="false"
  >
    <FormKit
      type="text"
      name="username"
      label=""
      placeholder="Username"
      validation="required"
    />

    <FormKit
      type="password"
      name="password"
      placeholder="Password"
      validation="required"
    />
    <FormKit
      type="button"
    >
      Login
    </FormKit>
    <!-- <pre wrap>{{ value }}</pre> -->
  </FormKit>
</template>

<script setup>
  import { ref } from 'vue'

  const submitted = ref(false)
  const submitHandler = async () => {
    // Let's pretend this is an ajax request:
    await new Promise((r) => setTimeout(r, 1000))
    submitted.value = true
  }
</script>

