<template>
  <div>
    <h2 class="text-2xl font-semibold mb-2">商品列表</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="border p-4 rounded"
      >
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-600">${{ product.price.toFixed(2) }}</p>
        <button
          @click="addToCart(product)"
          class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

const products = ref([
  { id: 1, name: "商品 A", price: 10.99 },
  { id: 2, name: "商品 B", price: 15.99 },
  { id: 3, name: "商品 C", price: 20.99 },
  { id: 4, name: "商品 D", price: 25.99 },
]);

const addToCart = (product) => {
  cartStore.addItem(product);
};
</script>
