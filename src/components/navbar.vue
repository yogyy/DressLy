<script setup lang="ts">
import Logo from "@/components/logo.vue";
const links = [
  { name: "Shop" },
  { name: "New Arrival" },
  { name: "Sale" },
  { name: "Blog" },
];
import bag from "@/assets/bag.svg";
import search from "@/assets/search.svg";
import people from "@/assets/people.svg";
const icons = [
  { name: "search", icon: search },
  { name: "bag", icon: bag },
  { name: "people", icon: people },
];
</script>

<template>
  <div class="flex w-[1440xpx] items-center justify-between gap-4 py-12">
    <div class="flex w-full gap-10">
      <Logo />
      <ul
        class="flex w-full flex-shrink items-center justify-center gap-8 font-semibold text-[#1B1314]"
      >
        <li v-for="link in links" :key="link.name" class="text-base font-bold">
          <a :href="'#' + link.name.toLowerCase()">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <ul class="flex w-fit items-center justify-center gap-6">
      <li v-for="icon in icons" :key="icon.name" class="flex items-center">
        <button class="w-6"><img :src="icon.icon" :alt="icon.name" /></button>
      </li>
    </ul>
  </div>
</template>
