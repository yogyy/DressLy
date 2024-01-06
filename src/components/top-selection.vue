<script setup lang="ts">
import ElegantEid from '@/assets/selections/elegent-eid-attire.webp';
import Accessory from '@/assets/selections/accessory-essentials.webp';
import Shoes from '@/assets/selections/everyday-shoes.webp';
import Card from './card.vue';
import Sneaker from '@/assets/bestsellers/sneaker.webp';
import WRobe from '@/assets/bestsellers/womens-robes.webp';
import Bag from '@/assets/bestsellers/bag.webp';
import MRobe from '@/assets/bestsellers/mens-robes.webp';

const TopSelection = [
  { name: 'Elegant Eid Attire', img: ElegantEid },
  { name: 'Accessory Essentials', img: Accessory },
  { name: 'Everyday Shoes', img: Shoes },
];

const bestSellers = [
  { name: 'Sneaker', price: 965500, original: 1079500, image: Sneaker },
  { name: "Women's Robes", price: 755000, original: null, image: WRobe },
  { name: 'Bag', price: 92050, original: 1000500, image: Bag },
  { name: "Men's Robes", price: 680000, original: null, image: MRobe },
];
</script>

<template>
  <div class="py-20 flex flex-col gap-8 h-full">
    <h1 class="font-serif font-semibold text-5xl leading-[110%]">
      Top Selection
    </h1>
    <ul class="flex gap-6">
      <li
        v-for="item in TopSelection"
        :key="item.name"
        class="rounded-md overflow-hidden relative items flex items-end justify-center hover:cursor-pointer group">
        <div
          class="w-full h-full bg-[#262626]/50 absolute mix-blend-multiply group-hover:mix-blend-normal" />
        <img :src="item.img" :alt="item.name + 'pic'" class="" />
        <p class="absolute font-serif z-10 font-medium">{{ item.name }}</p>
      </li>
    </ul>
  </div>
  <div class="bestsellers flex gap-8 flex-col py-20">
    <div class="text-[#12070B] flex w-full justify-between">
      <h2 class="font-serif font-semibold text-5xl leading-[110%]">
        Bestsellers
      </h2>
      <button
        type="button"
        style="font-family: 'Ubuntu', sans-serif"
        class="rounded-lg bg-[#E09370] py-3 px-8 leading-[140%] font-bold">
        See All
      </button>
    </div>
    <ul class="flex gap-6">
      <Card
        v-for="item in bestSellers"
        :alt="item.name + ' picture'"
        :img="item.image"
        :title="item.name"
        :price="item.price"
        :original-price="item.original" />
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
</style>
