<template>
  <header class="bg-dark-aubergine-800 text-medium-beige-300">

      <div class="flex items-center justify-between"> <!-- I see no diff between justify-around and justify-between as it should show a diff-->

        <img src="/src/assets/images/logos/logo_light.png" alt="logo" class="logo max-h-[60px] m-[1rem]"></img>
        <RouterLink to="/catalogue"
        class="text-medium-beige-300">
        BROWSE FURNITURES
        </RouterLink>  

  
        <div class="flex justify-between "> <!-- I see no diff between justify-around/between changing rem don't do anything -->
          <!-- Account button is not completely recognized by home.vue as a button so the cursor doesn't change-->
          <AccountButton></AccountButton>
          <CartButton></CartButton>
        </div>

      </div>

    </header>

</template>

<script setup>
import{ref} from 'vue'
import AccountButton from './AccountButton.vue';
import CartButton from './CartButton.vue';
</script>

<!-- TO DO :
 * Change header's and logo's colors depending on the pages you are on 
 * Hover on AccountButton doesn't work
 * -->
