<script setup lang="ts">
import Navbar from '@/components/navbar.vue';
import Hero from '@/components/hero.vue';
import Selection from './components/top-selection.vue';
import Order from './components/order.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div class="layout">
    <Navbar />
    <Hero />
    <img src="/brand.png" alt="brands" draggable="false" />
    <Selection />
    <Order />
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  min-height: 100dvh;
  padding: 0 110px;
}
</style>
