<script>
  import Header from "@/components/layouts/Header.vue"
  import Footer from "@/components/layouts/Footer.vue"

  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>

<template>
  <div>
    <Header />
    <div class="my-[100px]">
      <slot />
    </div>
    <Footer />
  </div>
</template>