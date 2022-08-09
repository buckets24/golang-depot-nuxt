
<script setup>
  const user = useSupabaseUser()
  const { auth } = useSupabaseClient()
</script>

<template>
  <div class='flex flex-col items-center gap-2'>
    <div class='flex flex-row gap-4'>
      <div>
        <button
          @click="auth.signIn({ provider: 'google' })"
        >
          <img
            src="@/assets/images/google.svg"
            :width="40"
          />
        </button>
      </div>
      <div>
        <button
          @click="auth.signIn({ provider: 'github' })"
        >
           <img
            src="@/assets/images/github.svg"
            :width="40"
          />
        </button>
      </div>
    </div>
  </div>
</template>
