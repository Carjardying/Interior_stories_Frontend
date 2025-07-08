<template>
  <nav v-if="auth.isAuthenticated">
    <RouterLink to="/cart">
      <img src="/src/assets/images/icons/cart_light_icon.png" alt="Cart icon light version" class="w-8 h-8" />
    </RouterLink>
  </nav>
  <nav v-else>
    <RouterLink to="/login">
      <img src="/src/assets/images/icons/cart_light_icon.png" alt="Cart icon light version" class="w-8 h-8" />
    </RouterLink>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore();
</script>