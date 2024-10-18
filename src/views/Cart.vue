<template>
  <div>
    <h2 class="text-2xl font-semibold mb-2">購物車</h2>
    <div v-if="cart.items.length === 0" class="text-gray-500">購物車是空的</div>
    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex justify-between items-center mb-2"
      >
        <span>{{ item.name }} x {{ item.quantity }}</span>
        <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
      </div>
      <div class="mt-4 font-bold">總計: ${{ cart.total.toFixed(2) }}</div>
      <button
        @click="checkout"
        class="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        結帳
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";

const cart = useCartStore();

const checkout = () => {
  // 實現結帳邏輯
  console.log("Checkout clicked");
};
</script>
