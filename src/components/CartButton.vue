<template> 
    <RouterLink to="/login"
    class="text-medium-beige-300 border border-medium-beige-300 p-[1rem]"
    ><img
      src="/src/assets/images/icons/cart_light_icon.png"
      alt="cart link"
      class="cart max-h-[30px]"/>
  </RouterLink>

  <!-- <RouterLink to="/cart"
    class="text-medium-beige-300 border border-medium-beige-300 p-[1rem]"
    ><img
      src="/src/assets/images/icons/cart_light_icon.png"
      alt="cart link"
      class="cart max-h-[30px]"/>
  </RouterLink> -->
</template>

<script setup>
import { ref } from "vue";
const connected = ref(false); 

// function isConnected(){
//    if (connected == true){
//      RouterLink.to="/cart"  
//   } else {
//      RouterLink.to="/login"
//   }
// }
// isConnected();

</script>

<!-- TO DO :
 *  FIX : 
 *  if (connected == true){
 *    RouterLink to="/cart" => RouterLink to="/cart"  
 * } else {
 *    RouterLink to="/cart" => RouterLink to="/login"
 * }
 * (Already commented if the connexion route is done, DO NOT DELETE)-->