<template>
  <!-- Account Button -->
  <div class="relative">
    <button @click="open = true" class="cursor-pointer">
      <img 
        :src="accountIcon" 
        :alt="accountIconAlt" 
        class="w-8 h-8" 
      />
    </button>

    <!-- Modal positioned relative to button -->
    <div 
      v-if="open"
      ref="modal" 
      :class="modalClasses"
      class="absolute z-[999] top-14 sm:top-16 left-0 sm:left-0 md:left-0 flex flex-col items-start sm:items-center space-y-2 sm:space-y-4 min-w-max"
    >
      <!-- Authenticated user - Logout option -->
      <div v-if="auth.isAuthenticated">
        <RouterLink 
          to="/home" 
          @click="logout"
          :class="buttonClasses"
          class="px-4 py-2 transition-colors duration-200"
        >
          Sign out
        </RouterLink>
      </div>

      <!-- Non-authenticated user - Login option -->
      <div v-else>
        <RouterLink 
          to="/login" 
          @click="closeModal"
          :class="buttonClasses"
          class="px-4 py-2 transition-colors duration-200"
        >
          Log in
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- Full Screen Backdrop -->
  <div 
    v-if="open" 
    @click.self="closeModal"
    :class="backdropClasses"
    class="fixed inset-0 w-screen h-screen backdrop z-50 min-h-screen min-w-full"
  >
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '../stores/auth';

const props = defineProps({
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
});

const open = ref(false);
const auth = useAuthStore();

const accountIcon = computed(() => {
  return props.theme === 'dark' 
    ? '/src/assets/images/icons/account_light_account.png'
    : '/src/assets/images/icons/account_dark_account.png';
});

const accountIconAlt = computed(() => {
  return props.theme === 'dark' 
    ? 'Account icon light version'
    : 'Account icon dark version';
});

const backdropClasses = computed(() => {
  return props.theme === 'dark' 
    ? 'bg-dark-aubergine-800/50'
    : 'bg-medium-beige-300/50';
});

const modalClasses = computed(() => {
  return props.theme === 'dark' 
    ? '' // No background for dark theme (transparent)
    : 'bg-light-beige-100 shadow-lg';
});

const buttonClasses = computed(() => {
  return props.theme === 'dark' 
    ? 'bg-light-brown-600 text-medium-beige-300 hover:bg-medium-brown-700'
    : 'bg-dark-brown-800 text-medium-beige-300 font-body hover:bg-dark-aubergine-800';
});

function closeModal() {
  open.value = false;
}

function logout() {
  auth.logout();
  closeModal();
}
</script>