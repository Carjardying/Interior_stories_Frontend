import { defineStore } from 'pinia'

export const useFurnitureStore = defineStore('furniture', {
  state: () => ({
    id: null  // stock ID
  }),

  getters: {
  },

  actions: {
    setFurnitureId(furnitureId) {
      this.id = furnitureId
    },
  }
});