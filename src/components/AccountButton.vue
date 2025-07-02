<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true"><img src="/src/assets/images/icons/account_light_account.png" alt="account link" class="account max-h-[30px]"></button>

  <div v-if="open" class="modal flex items-center flex-col size-24 m-[20px]">
    <a href="http://localhost:5500/login" class="bg-medium-brown-700"> Login </a>
    <a href="http://localhost:5500/register" class="bg-light-brown-600"> Sign up </a> 
    <button @click="open = false">Close</button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 13%;
  /* width: 150px; */
  /* left: 50%;
  margin-left: -150px; */
}
</style>