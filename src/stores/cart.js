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
        console.log(`Le meuble ${furnitureId} a été ajouté au panier`)
      } else {
        console.log(`Le meuble ${furnitureId} est déjà dans le panier`)
      }
    }
  }
});