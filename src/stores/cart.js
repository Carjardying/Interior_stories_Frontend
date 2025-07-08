import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []  // stock ID
  }),

  getters: {
    cartCount: (state) => state.items.length,
  },

  actions: {
    addToCart(furnitureId) {
      if (!this.items.includes(furnitureId)) {
        this.items.push(furnitureId)
      }
    },

    removeFromCart(furnitureId) {
      const indexItem = this.items.indexOf(furnitureId)
      this.items.splice(indexItem,1)
    }
  }
});