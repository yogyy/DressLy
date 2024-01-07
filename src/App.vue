<script setup lang="ts">
import Navbar from '@/components/navbar.vue';
import Hero from '@/components/hero.vue';
import Selection from './components/top-selection.vue';
import Order from './components/order.vue';
import Footer from './components/footer.vue';
import Brands from './components/brands.vue';
</script>

<template>
  <div class="px-4 2xl:px-[110px] w-full">
    <Navbar />
    <Hero />
    <Brands />
    <Selection />
    <Order />
    <Footer />
  </div>
</template>

<style scoped></style>
