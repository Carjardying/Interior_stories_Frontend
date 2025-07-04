<template>
  <!-- Account Button -->
  <button @click="open = true" class="cursor-pointer">
    <img src="/src/assets/images/icons/account_dark_account.png" alt="Account icon dark version" class="w-8 h-8" />
  </button>

  <!-- Backdrop + Modal -->
  <div v-if="open" @click.self="closeModal" class="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <!-- Modal box -->
    <div ref="modal" class="modal bg-light-beige-100 rounded-lg shadow-lg flex flex-col items-center space-y-4">
      <div v-if="auth.isAuthenticated">
        <RouterLink to="/home" @click="logout"
          class="bg-dark-brown-800 text-medium-beige-300 px-4 py-2 rounded hover:bg-dark-aubergine-800 transition-colors duration-200">
          LogOut
        </RouterLink>
      </div>
      <div v-else>
        <RouterLink to="/login"
          class="bg-dark-brown-800 text-medium-beige-300 px-4 py-2 rounded hover:bg-dark-aubergine-800 transition-colors duration-200">
          LogIn
        </RouterLink>
      </div>
    </div>
  </div>
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