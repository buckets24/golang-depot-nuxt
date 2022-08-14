import { readonly, ref } from "vue"
export default () => {
  const supabase = useSupabaseClient()
  const user = supabase.auth.user()

  let profile = ref({} as any)

  const getUser = async (email: string) => {
    const { data } = await supabase
      .from('profile')
      .select('*')
      .eq('email', email)

    if (data?.[0]) {
      profile.value = {
        ...data?.[0],
        first_name: data?.[0]?.first_name,
        last_name: data?.[0]?.last_name,
        phone: data?.[0]?.phone?.mobile,
        countryCode: data?.[0]?.phone?.code,
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
    userEmail: user?.email
  }
}