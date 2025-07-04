<template>
  <div class="bg-dark-aubergine-800 h-dvh">

    <header class="bg-dark-aubergine-800 text-medium-beige-300">

      <div class="flex items-center justify-between">
        
        <div class="flex items-center ">
          <img src="/src/assets/images/logos/logo_light.png" alt="Brand logo light version"
            class="logo h-20 m-[1rem]"></img>
          <h1 class="text-medium-beige-300 ">Interior Stories</h1>
        </div>

        <div class="flex item-center space-x-6 pr-10">
          <AccountButtonHome></AccountButtonHome>
          <CartButtonHome></CartButtonHome>
        </div>

      </div>
    </header>

    <div class="bg-dark-aubergine-800 h-dvh">
      <img src="/src/assets/images/interior/homepage_picture.PNG" alt="Living room with modern interior"
        class="imageHome" />
      <div class="text-medium-beige-300 flex items-center justify-between">
        <RouterLink to="/Catalogue" class="font-heading text-6xl p-[2rem]">
          Explore our selection
        </RouterLink>
        <p class="font-body p-[2rem]">
          We curate statement pieces that turn living <br>
          spaces into narratives of your life.
        </p>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import AccountButtonHome from '../components/AccountButtonHome.vue';
import CartButtonHome from "../components/CartButtonHome.vue";
</script>