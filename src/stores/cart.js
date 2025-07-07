import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []  // on stocke les IDs ici
  }),

  getters: {
    cartCount: (state) => state.items.length,
  },

  actions: {
    addToCart(furnitureId) {
      if (!this.items.includes(furnitureId)) {
        this.items.push(furnitureId)
        // alert(`The furniture ${furnitureId} has been added to the cart`)
      } else {
        // alert(`The furniture ${furnitureId} is already in the cart`)
      }
    }
  }
});