<script setup>
  import useProfile from "@/composables/useProfile.ts"
  const supabase = useSupabaseClient()
  const {profile} = useProfile()

  console.log(profile, `profile`)

  const handleLogut = async () => {
    await supabase.auth.signOut()
    navigateTo('/auth/login')
  }

</script>

<script>
  export default {
    data () {
      return {
        showMenu: false,
      }
    },
    methods: {
      handleMenu () {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>


<template>
  <div>
    <div class="bg-base-100 fixed top-0 left-0 right-0 w-full p-2 pb-0">
      <div class="navbar bg-base-100 w-[99%] mx-auto my-2 shadow rounded">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Golang Depot</a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li v-show="profile.id">
                <button @click="navigateTo('/developer/profile')">Profile</button>
              </li>
              <li v-show="profile.id">
                <button @click="handleLogut">Logout</button>
              </li>
              <li v-show="!profile.id">
                <button @click="navigateTo('/auth/login')">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>