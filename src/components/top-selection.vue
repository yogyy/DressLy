<script setup lang="ts">
import ElegantEid from "@/assets/selections/elegent-eid-attire.webp";
import Accessory from "@/assets/selections/accessory-essentials.webp";
import Shoes from "@/assets/selections/everyday-shoes.webp";
import Card from "./card.vue";
import Sneaker from "@/assets/bestsellers/sneaker.webp";
import WRobe from "@/assets/bestsellers/womens-robes.webp";
import Bag from "@/assets/bestsellers/bag.webp";
import MRobe from "@/assets/bestsellers/mens-robes.webp";

const TopSelection = [
  { name: "Elegant Eid Attire", img: ElegantEid },
  { name: "Accessory Essentials", img: Accessory },
  { name: "Everyday Shoes", img: Shoes },
];

const bestSellers = [
  { name: "Sneaker", price: 965500, original: 1079500, image: Sneaker },
  { name: "Women's Robes", price: 755000, original: null, image: WRobe },
  { name: "Bag", price: 92050, original: 1000500, image: Bag },
  { name: "Men's Robes", price: 680000, original: null, image: MRobe },
];
</script>

<template>
  <div class="flex h-full flex-col gap-8 py-8 xl:py-20">
    <h1 class="font-serif text-2xl font-semibold leading-[110%] xl:text-5xl">
      Top Selection
    </h1>
    <ul class="flex flex-col gap-2 md:flex-row xl:gap-6">
      <li
        v-for="item in TopSelection"
        :key="item.name"
        class="items group relative flex w-full items-end justify-center overflow-hidden rounded-md hover:cursor-pointer"
      >
        <img
          :src="item.img"
          :alt="item.name + 'pic'"
          class="brightness-75 transition duration-200 group-hover:brightness-100"
        />
        <p class="absolute z-10 font-serif font-medium">{{ item.name }}</p>
      </li>
    </ul>
  </div>
  <div class="bestsellers flex w-full flex-col gap-4 py-8 xl:gap-8 xl:py-20">
    <div class="flex w-full items-center justify-between text-[#12070B]">
      <h2 class="font-serif text-2xl font-semibold leading-[110%] xl:text-5xl">
        Bestsellers
      </h2>
      <button
        type="button"
        style="font-family: &quot;Ubuntu&quot;, sans-serif"
        class="rounded-lg bg-transparent px-3 py-1.5 text-[14px] font-bold leading-[140%] text-[#E09370] sm:bg-[#E09370] sm:px-8 sm:py-3 sm:text-base sm:text-inherit"
      >
        See All
      </button>
    </div>
    <ul class="flex w-full gap-[5px] overflow-x-scroll sm:gap-6">
      <Card
        v-for="item in bestSellers"
        :alt="item.name + ' picture'"
        :img="item.image"
        :title="item.name"
        :price="item.price"
        :original-price="item.original"
      />
    </ul>
  </div>
</template>

<style scoped>
.items p {
  color: #f4f4f4;
  font-size: 23.17px;
  line-height: 110%;
  letter-spacing: -2%;
  margin-bottom: 53.36px;
}
.bestsellers ul::-webkit-scrollbar {
  display: none;
}
</style>
