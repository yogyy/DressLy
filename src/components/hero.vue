<script setup lang="ts"></script>

<template>
  <div class="py-16 flex gap-4 items-center px-0 flex-col md:flex-row-reverse">
    <div class="flex-1">
      <img src="/img-hero.webp" alt="hero iamge" />
    </div>
    <div class="flex-1 flex flex-col gap-10">
      <div class="flex flex-col gap-6">
        <h1 class="texthero title">Discover the Latest Fashion Trends</h1>
        <p class="text-base leading-[140%] font-medium">
          From stylish dresses to trendy tops and must-have accessories, we have
          everything you need to stay on top of the latest fashion trends. Our
          expertly curated collection features the hottest styles from top
          designers, so you can always find the perfect look for any occasion.
          Shop now and discover your new favorite fashion pieces.
        </p>
      </div>
      <button class="px-12 py-3 font-bold">Shop Now</button>
    </div>
  </div>
</template>

<style scoped>
.texthero.title {
  color: #12070b;
  font-size: 52.37px;
  line-height: 110%;
  font-family: 'Lora';
  font-weight: 600;
}

button {
  max-width: 286px;
  border-radius: 7.48px;
  line-height: 140%;
  background-color: #e09370;
  color: #12070b;
  line-height: 140%;
  font-size: 14.96px;
}
</style>
