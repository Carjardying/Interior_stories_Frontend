<template>
  <button @click="open = true"><img src="/src/assets/images/icons/account_light_account.png" alt="account link" class="account max-h-[30px]"></button>

  <div v-if="open" class="modal flex items-center flex-col size-24 m-[20px]">
    <RouterLink to="/login" class="bg-medium-brown-700">Login</RouterLink> <!--Make them rectangular with a little margin around them and text in center-->
    <RouterLink to="/register" class="bg-light-brown-600">Sign up</RouterLink> 
    <button @click="open = false">Close</button> <!--change in js into "if click out of the modal{ open = false}"-->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
/** TO DO : CHANGE MODALE:
 * const connected = ref(false)
 *  IF (connected == true){
 *    RouterLink to="/login" => RouterLink to="/account"
 *    RouterLink register =>  button @click= "disconnect"
 *
 * } */
</script>

<style scoped>
.modal {
  position: absolute;
  z-index: 999;
  top: 13%;
  /* width: 150px; */
  /* left: 50%;
  margin-left: -150px; */
}
</style>