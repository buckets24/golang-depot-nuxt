<script>
  import Footer from "@/components/layouts/Footer.vue"

  export default {
    components: {
      Footer,
    }
  }
</script>

<template>
  <div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>