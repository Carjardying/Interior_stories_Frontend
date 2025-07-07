<template>
  <div class="bg-dark-aubergine-800 min-h-screen">
    <!-- Main content that fits in viewport on desktop -->
    <div class="h-screen flex flex-col">
      <!-- Header -->
      <header class="bg-dark-aubergine-800 text-medium-beige-300 flex-shrink-0">
        <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16">

          <!-- Logo and Brand Name -->
          <div class="flex items-center space-x-2 sm:space-x-4">
            <img src="/src/assets/images/logos/logo_light.png" alt="Brand logo light version"
              class="h-12 sm:h-16 lg:h-20 my-4" />
            <h1 class="text-medium-beige-300 font-body text-sm sm:text-base lg:text-lg xl:text-xl hidden sm:block">
              Interior Stories
            </h1>
          </div>

          <!-- Header Actions -->
          <div class="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            <AccountButtonHome />
            <CartButtonHome />
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <div class="flex-1 bg-dark-aubergine-800 relative overflow-hidden">
        <!-- Hero Image -->
        <img src="/src/assets/images/interior/homepage_picture.PNG" alt="Living room with modern interior"
          class="absolute inset-0 w-full h-full object-cover" />

        <!-- Content Overlay -->
        <div
          class="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8 xl:p-16 bg-gradient-to-t from-dark-aubergine-800/80 to-transparent">

          <!-- Mobile Layout / Tablet (Stacked) -->
          <div class="block lg:hidden text-medium-beige-300 space-y-6">
            <RouterLink to="/Catalogue"
              class="font-heading text-2xl sm:text-3xl md:text-4xl leading-tight block hover:text-salmon-300 transition-colors duration-300">
              Explore our selection
            </RouterLink>
            <p class="font-body text-sm sm:text-base leading-relaxed">
              We curate statement pieces that turn living
              spaces into narratives of your life.
            </p>
          </div>

          <!-- Desktop/Large Tablet Layout (Side by side) -->
          <div class="hidden lg:flex items-end justify-between text-medium-beige-300">
            <RouterLink to="/Catalogue"
              class="font-heading text-4xl xl:text-5xl 2xl:text-6xl leading-tight hover:text-salmon-300 transition-colors duration-300">
              Explore our selection
            </RouterLink>
            <p class="font-body text-base xl:text-lg leading-relaxed max-w-md xl:max-w-lg">
              We curate statement pieces that turn living <br class="hidden xl:block">
              spaces into narratives of your life.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer (appears on scroll on all devices) -->
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import AccountButtonHome from '../components/AccountButtonHome.vue';
import CartButtonHome from "../components/CartButtonHome.vue";
</script>