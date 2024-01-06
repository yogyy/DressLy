<script setup lang="ts">
import { ref } from 'vue';
const steps = ['Select Product', 'Login/Register', 'Shopping bag', 'Payment'];
const email = ref('');
const sendEmail = () => {
  console.info(email.value);
  email.value = '';
};
</script>
<template>
  <div class="order">
    <h1 class="title">The Easy Way to Order</h1>
    <div class="journey flex items-center justify-center">
      <ul class="relative flex space-x-[30px] justify-center items-center">
        <div
          class="border border-[#A14B38] w-[80%] absolute border-dashed top-[22px] ml-7" />
        <li v-for="(step, i) in steps" :key="step">
          <div class="relative flex flex-col gap-6 items-center">
            <div class="circle flex items-center justify-center font-bold">
              {{ i + 1 }}
            </div>
            {{ step }}
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="newsletter py-20 flex flex-col gap-8 items-center">
    <h1 class="text-[#12070B] font-serif font-semibold text-5xl leading-[110%]">
      Subscribe Our Newsletter
    </h1>
    <div class="flex gap-6 w-full max-w-[808px] h-[36px]">
      <input
        type="text"
        placeholder="Type your mail"
        v-model="email"
        class="p-2.5 rounded-lg w-full border placeholder:text-xs" />
      <button
        class="bg-[#E09370] w-[36px] grid place-content-center rounded-lg"
        @click="sendEmail">
        <img
          src="../assets/send.svg"
          alt="send email logo"
          class="w-5 h-5" /><span class="sr-only">send email</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: 'Lora';
  font-size: 48px;
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
  padding: 80px 0;
  gap: 32px;
  border-radius: 16px;
}
.circle {
  padding: 8px;
  font-family: 'Ubuntu', sans-serif;
  background-color: #fbe3c9;
  color: #12070b;
  line-height: 140%;
  font-size: 20px;
  border-radius: 100%;
  width: 44px;
  height: 44px;
}
</style>
