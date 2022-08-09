<template>
  <div class='w-full h-screen max-w-2xl mx-auto flex items-center'>
    <div class='w-full flex flex-col justify-center items-center gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <div class='flex flex-col items-center justify-between gap-3'>
        <NuxtLink to='/profile/create/hirer'>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline'>
            I am looking to hire Golang developer
          </button>
        </NuxtLink>

        <div class='relative flex justify-center items-center my-8'>
          <div class='flex items-center justify-center rounded-full relative z-10 w-[30px] h-[30px] bg-white'>
            <span class='text-xs text-body-dark'>OR</span>
          </div>
          <div class='absolute z-0 h-[1px] w-[400px] bg-[#CCCCCC]' />
        </div>

        <NuxtLink to='/developer/profile/create'>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline'>
            I am Golang developer
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>