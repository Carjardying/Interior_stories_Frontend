<template>
  <!-- Only show header on specific pages -->
  <div v-if="shouldShowHeader">
    <!-- Home Header -->
    <header 
      v-if="isHomePage"
      class="bg-dark-aubergine-800 text-medium-beige-300 flex-shrink-0"
    >
      <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16">
        <!-- Logo and Brand Name -->
        <div class="flex items-center space-x-2 sm:space-x-4">
          <img 
            src="/src/assets/images/logos/logo_light.png" 
            alt="Brand logo light version"
            class="h-12 sm:h-16 lg:h-20 my-4" 
          />
          <h1 class="text-medium-beige-300 font-body text-sm sm:text-base lg:text-lg xl:text-xl hidden sm:block">
            Interior Stories
          </h1>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
          <AccountButton theme="dark" />
          <CartButton theme="dark" />
        </div>
      </div>
    </header>

    <!-- Catalogue & Cart Header -->
    <header 
      v-else
      class="flex justify-between items-center pl-16 py-8 pr-16"
    >
      <!-- Logo -->
      <div>
        <img 
          src="../assets/images/logos/logo_dark.png" 
          alt="Brand logo dark version" 
          class="h-20" 
        />
      </div>

      <!-- Header Icons -->
      <div class="flex items-center space-x-6">
        <!-- User Account Icon -->
        <AccountButton theme="light" />

        <!-- Shopping Cart Icon -->
        <CartButton theme="light" />
      </div>
    </header>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AccountButton from './AccountButton.vue';
import CartButton from './CartButton.vue';

const route = useRoute();

// Computed property to determine if we're on home page
const isHomePage = computed(() => {
  return route.path === '/home';
});

// Pages that should show the standard header (catalogue/cart style)
const standardHeaderPages = ['/catalogue', '/cart'];
const dynamicRoutes = [/^\/furniture-details\/\d+$/];

// Computed property to determine if we should show any header at all
const shouldShowHeader = computed(() => {
  return isHomePage.value ||
    standardHeaderPages.includes(route.path) ||
    dynamicRoutes.some(pattern => pattern.test(route.path));
});
</script>