<template>
  <!-- Account Button -->
  <button @click="open = true" class="cursor-pointer">
    <img src="/src/assets/images/icons/account_light_account.png" alt="Account icon to log in or log out" class="w-8 h-8" />
  </button>

  <!-- Full Screen Backdrop + Modal -->
  <menu v-if="open" @click.self="closeModal"
    class="fixed inset-0 w-screen h-screen bg-dark-aubergine-800/50 backdrop flex items-center justify-center z-50 min-h-screen min-w-full">

    <!-- Modal box positioned at top-right on all screen sizes -->
    <nav ref="modal" class="absolute z-[999] top-[13%] right-[6%] flex flex-col items-center space-y-4">

      <!-- Authenticated user - Logout option -->
      <div v-if="auth.isAuthenticated">
        <RouterLink to="/home" @click="logout"
          class="bg-light-brown-600 text-medium-beige-300 px-4 py-2 hover:bg-medium-brown-700 transition-colors duration-200">
          Sign out
        </RouterLink>
      </div>

      <!-- Non-authenticated user - Login option -->
      <div v-else>
        <RouterLink to="/login" @click="closeModal"
          class="bg-light-brown-600 text-medium-beige-300 px-4 py-2 hover:bg-medium-brown-700 transition-colors duration-200">
          Log in
        </RouterLink>
      </div>
    </nav>
  </menu>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const open = ref(false);
const auth = useAuthStore();

function closeModal() {
  open.value = false
}

function logout() {
  auth.logout();
  closeModal();
}
</script>


<!-- A mettre en classe tailwind, si possible -->
<style scoped>
.modal {
  position: absolute;
  z-index: 999;
  top: 13%;
  right: 6%;
}
</style>