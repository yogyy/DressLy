<script setup lang="ts">
import Logo from '@/components/logo.vue';
const links = [
  { name: 'Shop' },
  { name: 'New Arrival' },
  { name: 'Sale' },
  { name: 'Blog' },
];
import bag from '@/assets/bag.svg';
import search from '@/assets/search.svg';
import people from '@/assets/people.svg';
const icons = [
  { name: 'search', icon: search },
  { name: 'bag', icon: bag },
  { name: 'people', icon: people },
];
</script>

<template>
  <div class="flex justify-between items-center gap-4 py-12 w-[1440xpx]">
    <div class="flex gap-10 w-full">
      <Logo />
      <ul
        class="flex w-full gap-8 items-center justify-center flex-shrink text-[#1B1314] font-semibold">
        <li v-for="link in links" :key="link.name" class="text-base font-bold">
          <a :href="'#' + link.name.toLowerCase()">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <ul class="flex gap-6 w-fit">
      <li v-for="icon in icons" :key="icon.name">
        <button><img :src="icon.icon" :alt="icon.name" /></button>
      </li>
    </ul>
  </div>
</template>
