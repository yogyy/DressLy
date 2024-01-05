<script setup lang="ts">
import Navbar from '@/components/navbar.vue';
import Hero from '@/components/hero.vue';
import TopSelection from './components/top-selection.vue';
</script>

<template>
  <div class="layout">
    <Navbar />
    <Hero />
    <marquee>
      <img src="/brand.png" alt="brands" draggable="false" />
    </marquee>
    <TopSelection />
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  min-height: 100dvh;
  padding: 0 110px;
}
</style>
