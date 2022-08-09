

<script setup>
  const supabase = useSupabaseClient()

  let loading = ref(false)

  const getUser = async (email) => {
    console.log(email, `email`)
    loading.value = true
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .eq('email', email)

    if (data?.[0]) {
      navigateTo('/developer/profile')
    } else {
      navigateTo('/new-user')
    }
  }

  onMounted(() => {
    supabase.auth.onAuthStateChange(
      async (_event, session) => {
        console.log(session, `session`)

        getUser(session?.user?.email)
      }
    )
  })

</script>

<template>
  <h1>Index page - Placeholder Page</h1>
</template>