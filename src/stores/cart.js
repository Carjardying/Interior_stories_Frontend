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
        console.log(`The furniture ${furnitureId} has been added to the cart`)
      } else {
        console.log(`The furniture ${furnitureId} is already in the cart`)
      }
    }
  }
});