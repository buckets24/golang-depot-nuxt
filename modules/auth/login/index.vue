<template>
  <div class='w-full h-screen flex flex-col justify-center items-center gap-4'>
    <div class='flex flex-col items-center gap-1'>
      <h4 class='font-bold text-2xl'>Welcome</h4>
      <span class='text-body-dark text-md'>Login in to your Account</span>
    </div>

    <div class='w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <LoginWithEmail />
      <div class='relative flex justify-center items-center my-4'>
        <div class='flex items-center justify-center rounded-full relative z-10 w-[30px] h-[30px] bg-white'>
          <span class='text-xs text-body-dark'>OR</span>
        </div>
        <div class='absolute z-0 h-[1px] w-full bg-[#CCCCCC]' />
      </div>
      <LoginWithSocial />
    </div>

    <div class='flex items-center gap-2'>
      <span class='text-body-dark text-xs'>Don't have an Account yet?</span>
      <Link href='/signup'>
        <span class='text-blue-500 cursor-pointer'>Signup</span>
      </Link>
    </div>
  </div>
</template>

<script>
  import LoginWithEmail from './components/LoginWithEmail.vue'
  import LoginWithSocial from './components/LoginWithSocial.vue'

  export default {
    components: {
      LoginWithEmail,
      LoginWithSocial
    }
  }
</script>