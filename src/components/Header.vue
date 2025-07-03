<template>
  <!-- Header -->
  <header class="flex justify-between items-center pl-16 py-8 pr-16">
    <!-- Logo -->
    <div>
      <img src="../assets/images/logos/logo_dark.png" alt="Brand logo dark version" class="h-20" />
    </div>

    <!-- Header Icons -->
    <div class="flex items-center space-x-6">
      <!-- User Account Icon -->
      <AccountButton></AccountButton>

      <!-- Shopping Cart Icon -->
      <CartButton></CartButton>
    </div>
  </header>
</template>

<script setup>
import AccountButton from '../components/AccountButton.vue';
import CartButton from '../components/CartButton.vue';
</script>