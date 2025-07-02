import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        userId: null,
        token: null,
    }),

    getters: {
        isAuthenticated: (state) => state.token !== null,
    },

    actions: {
        setUser(userId, token) {
            this.userId = userId
            this.token = token
        }
    }
});