<script setup lang="ts">
import Berluti from "@/components/icons/Berluti.vue";
import Balenciaga from "./icons/Balenciaga.vue";
import Gucci from "./icons/Gucci.vue";
import JimmyChoo from "./icons/JimmyChoo.vue";
import Burberry from "./icons/Burberry.vue";
import LouisVuitton from "./icons/LouisVuitton.vue";

const brands = [
  { name: "Berluti", logo: Berluti },
  { name: "Gucci", logo: Gucci },
  { name: "Jimmy Choo", logo: JimmyChoo },
  { name: "Burberry", logo: Burberry },
  { name: "Balenciaga", logo: Balenciaga },
  { name: "Louis Vuitton", logo: LouisVuitton },
];
</script>

<template>
  <div class="py-8 xl:py-16">
    <ul
      class="flex w-full flex-wrap justify-center gap-y-2 xs:justify-around sm:justify-between"
    >
      <li
        v-for="brand in brands"
        :key="brand.name"
        :title="brand.name"
        class="flex w-full justify-center xs:w-fit"
      >
        <component :is="brand.logo" class="brand" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.brand {
  min-width: 100dvw;
  max-width: 160px;
  fill: #bdbdbd;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
.brand:hover {
  fill: #12070b;
  cursor: pointer;
}
@media (min-width: 375px) {
  .brand {
    min-width: fit-content;
  }
}
@media (min-width: 640px) {
  .brand {
    max-width: max-content;
  }
}
</style>
