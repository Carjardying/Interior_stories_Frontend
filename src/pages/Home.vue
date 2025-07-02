<!-- Page à modifier par la suite -->


<template>

  <div class="bg-dark-aubergine-800 h-dvh">

    <header class="bg-dark-aubergine-800 text-medium-beige-300">

      <div class="flex items-center justify-between">

        <img src="/src/assets/images/logos/logo_light.png" alt="logo" class="logo max-h-[60px] m-[1rem]"></img> 
        <a href="http://localhost:5500/catalogue">BROWSE FURNITURES</a>
  
        <div class="flex justify-around m-[1rem]">
          <!-- -->
          <AccountButton></AccountButton>
          <a href="http://localhost:5500/cart"> <img src="/src/assets/images/icons/cart_light_icon.png" alt="cart link" class="cart max-h-[30px]"></a>

        </div>

      </div>

    </header> <!-- component Header.vue -->
  
    <div class="bg-dark-aubergine-800 h-dvh">
      <img src="/src/assets/images/interior/homepage_picture.PNG" alt="Homepage image" class="imageHome">

      <div class="text-medium-beige-300 flex items-center justify-between">
        <h1 class="font-heading text-6xl m-[2rem]">Interior Stories</h1> 
        <p class="font-body m-[2rem]">We curate statement pieces that turn living <br/> spaces into narratives of your life.</p>
      </div>
    </div>
  
    <footer class="bg-khaki-900 text-medium-beige-300 flex items-center justify-between">
      <img src="/src/assets/images/logos/logo_light.png" alt="logo" class="logo max-h-[60px] m-[1rem]"></img> 
      <p class="font-body m-[1rem]">©Copyright 2025 Interior Stories</p>
    </footer> <!-- component Footer.vue -->

  </div>

</template>

<script setup>
  import AccountButton from '../components/AccountButton.vue';
</script>