<script setup lang="ts">
import { ref } from "vue";
const steps = ["Select Product", "Login/Register", "Shopping bag", "Payment"];
const email = ref("");
const sendEmail = () => {
  console.info(email.value);
  email.value = "";
};
</script>
<template>
  <div
    class="order relative gap-4 overflow-hidden py-6 lg:gap-8 lg:py-10 xl:py-20"
  >
    <h1 class="title text-2xl xl:text-5xl">The Easy Way to Order</h1>
    <div class="journey flex items-center justify-center">
      <ul
        class="relative flex flex-col items-center justify-center gap-[30px] lg:flex-row"
      >
        <div
          class="absolute left-[-6px] top-[22px] ml-7 h-4/5 border border-dashed border-[#A14B38] lg:left-6 lg:h-0 lg:w-4/5"
        />
        <li v-for="(step, i) in steps" :key="step" class="w-full">
          <div
            class="relative flex min-w-[148px] items-center gap-4 lg:flex-col xl:gap-6"
          >
            <div
              class="circle flex w-full items-center justify-center font-bold"
            >
              {{ i + 1 }}
            </div>
            {{ step }}
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="newsletter flex flex-col items-center gap-4 py-8 lg:gap-8 xl:py-20"
  >
    <h1
      class="font-serif text-2xl font-semibold leading-[110%] text-[#12070B] xl:text-5xl"
    >
      Subscribe Our Newsletter
    </h1>
    <div class="flex h-[36px] w-full max-w-[808px] gap-4 lg:gap-6">
      <input
        type="text"
        placeholder="Type your mail"
        v-model="email"
        class="w-full rounded-lg border p-2.5 placeholder:text-xs"
      />
      <button
        class="grid w-[36px] flex-shrink-0 place-content-center rounded-lg bg-[#E09370]"
        @click="sendEmail"
      >
        <img
          src="../assets/send.svg"
          alt="send email logo"
          class="h-5 w-5"
        /><span class="sr-only">send email</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: "Lora";
  line-height: 110%;
  color: #12070b;
  font-weight: 600;
}
.order {
  background-color: #f5ccab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}
.circle {
  padding: 8px;
  font-family: "Ubuntu", sans-serif;
  background-color: #fbe3c9;
  color: #12070b;
  line-height: 140%;
  font-size: 20px;
  border-radius: 100%;
  width: 44px;
  height: 44px;
}
</style>
