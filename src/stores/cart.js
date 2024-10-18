import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    total: (state) => {
      return state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    addItem(product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
  },
});
