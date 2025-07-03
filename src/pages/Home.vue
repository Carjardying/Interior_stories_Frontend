<template>
  <div class="bg-dark-aubergine-800 h-dvh">

    <!-- Refaire un component header qui varie light/dark, si possible -->
    <header class="bg-dark-aubergine-800 text-medium-beige-300">
      <div class="flex items-center justify-between">
        <!-- I see no diff between justify-around and justify-between as it should show a diff-->
        <img src="/src/assets/images/logos/logo_light.png" alt="Brand logo light version"
          class="logo max-h-[60px] m-[1rem]"></img>
        <RouterLink to="/catalogue" class="text-medium-beige-300">
          Go to our Catalogue
        </RouterLink>
        <div class="flex justify-between ">
          <!-- I see no diff between justify-around/between changing rem don't do anything -->
          <!-- Account button is not completely recognized by home.vue as a button so the cursor doesn't change-->

          <!-- Component a changer pour variable en light/dark, pour l'instant deux component ça fonctionne-->
          <AccountButtonHome></AccountButtonHome>
          <CartButtonHome></CartButtonHome>
        </div>
      </div>
    </header>

    <div class="bg-dark-aubergine-800 h-dvh">
      <img src="/src/assets/images/interior/homepage_picture.PNG" alt="Living room with modern interior"
        class="imageHome" />
      <div class="text-medium-beige-300 flex items-center justify-between">
        <h1 class="font-heading text-6xl p-[2rem]">Interior Stories</h1>
        <p class="font-body p-[2rem]">
          We curate statement pieces that turn living <br />
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