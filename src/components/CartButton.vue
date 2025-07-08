<template>
  <div v-if="auth.isAuthenticated">
    <RouterLink to="/cart">
      <img 
        :src="cartIcon" 
        :alt="cartIconAlt" 
        class="w-8 h-8" 
      />
    </RouterLink>
  </div>
  <div v-else>
    <RouterLink to="/login">
      <img 
        :src="cartIcon" 
        :alt="cartIconAlt" 
        class="w-8 h-8" 
      />
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../stores/auth';

const props = defineProps({
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
});

const auth = useAuthStore();

const cartIcon = computed(() => {
  return props.theme === 'dark' 
    ? '/src/assets/images/icons/cart_light_icon.png'
    : '/src/assets/images/icons/cart_dark_icon.png';
});

const cartIconAlt = computed(() => {
  return props.theme === 'dark' 
    ? 'Cart icon light version'
    : 'Cart icon dark version';
});
</script>