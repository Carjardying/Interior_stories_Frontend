import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
    }),

    getters: {
        isAuthenticated: (state) => state.token !== null,
    },

    actions: {
        setToken(token) {
            this.token = token
        }
    }
});