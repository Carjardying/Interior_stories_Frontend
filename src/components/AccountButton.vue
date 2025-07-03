<template>
  <button
    @click="open = true"
    class="text-medium-beige-300 p-[1rem]">
    <img
      src="/src/assets/images/icons/account_light_account.png"
      alt="account link"
      class="account max-h-[30px]"/>
  </button>

  <div v-if="open" 
  class="modal flex items-center flex-col size-24 m-[20px]"> <!--Make Modal rectangular with a little margin around and text in center please-->
    <RouterLink to="/login" class="bg-medium-brown-700">Login</RouterLink>
    
    <!-- <RouterLink to="/register" class="bg-light-brown-600">Sign up</RouterLink>  -->

    <button @click="open = false">Close</button>
    <!--change in js into "if click out of the modal{ open = false}"-->
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
const connected = ref(false);
</script>

<style scoped>
.modal {
  position: absolute;
  z-index: 999;
  top: 13%;
  /* width: 150px; */
}
</style>

<!-- TO DO : 
 * CHANGE MODAL:
 *  if (connected == true){
 *    RouterLink to="/login" => RouterLink to="/account"
 *    RouterLink register =>  button @click= "disconnect"
 *
 * Close Modal when clicking anywhere, not with close button
 * Change Transparency when clicking on Accountbutton
 * }  -->