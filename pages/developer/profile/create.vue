
<script>
  import CreateDeveloperProfile from '@/modules/profile/developer/create.vue'

  export default {
    components: {
      CreateDeveloperProfile,
    }
  }
</script>

<script setup>
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  let { data } = await supabase
    .from('profile')
    .select('*')
    .eq('id', user?.id)

  let hasBasicProfile = false

  if (data) {
    hasBasicProfile = true
  }
</script>


<template>
  <div>
    <CreateDeveloperProfile />
  </div>
</template>