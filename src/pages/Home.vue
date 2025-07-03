<!-- Page à modifier par la suite -->


<template>

  <div class="bg-dark-aubergine-800 h-dvh">

    <header class="bg-dark-aubergine-800 text-medium-beige-300">

      <div class="flex items-center justify-between"> <!-- I see no diff between justify-around and justify-between as it should show a diff-->

        <img src="/src/assets/images/logos/logo_light.png" alt="logo" class="logo max-h-[60px] m-[1rem]"></img>
        <RouterLink to="/catalogue" class="text-medium-beige-300">BROWSE FURNITURES</RouterLink>  

  
        <div class="flex justify-between border border-medium-beige-300"> <!-- I see no diff between justify-around/between changing rem don't do anything -->
          <AccountButton class="text-medium-beige-300 border border-medium-beige-300 p-[1rem]"></AccountButton>
          <RouterLink to="/cart" class="text-medium-beige-300 border border-medium-beige-300 p-[1rem]"><img src="/src/assets/images/icons/cart_light_icon.png" alt="cart link" class="cart max-h-[30px]"></RouterLink>

        </div>

      </div>

    </header> <!-- component Header.vue-->
  
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