import { readonly, ref } from "vue"
export default () => {
  const supabase = useSupabaseClient()
  const user = supabase.auth.user()

  let profile = ref({})

  const getUser = async (email: string) => {
    const { data } = await supabase
      .from('profile')
      .select('*')
      .eq('email', email)

    if (data?.[0]) {
      profile.value = {
        ... data?.[0],
        expected_salary: data?.[0]?.expected_salary?.amount
      }
    }
  }

  supabase.auth.onAuthStateChange(
    async (_event, session: any) => {
      getUser(session?.user?.email)
    }
  )

  if (user?.email) {
    getUser(user?.email)
  }

  return {
    profile: profile,
  }
}