<template>
  <!-- Main wrapper: Full viewport height with flexible layout that switches from vertical (mobile/tablet) to horizontal (desktop) -->
  <div class="h-screen flex flex-col lg:flex-row overflow-hidden">

    <!-- Khaki branding section: Functions as header on mobile/tablet (64px/80px height), expands to half-width on desktop -->
    <div
      class="w-full h-16 sm:h-20 lg:flex-1 lg:h-full bg-khaki-900 flex flex-col justify-between text-light-beige-100 relative">

      <!-- Container: Responsive padding that increases with screen size, centers content vertically on small screens -->
      <div class="p-4 sm:p-6 lg:p-6 xl:p-8 flex flex-col justify-center lg:justify-between h-full lg:h-full">

        <!-- Navigation header: Horizontal flex layout with back arrow and logo, aligned left with responsive spacing -->
        <div class="flex items-center space-x-3 sm:space-x-4 lg:space-x-4 xl:space-x-6 lg:mb-4">

          <!-- Back arrow button: Router link with hover effects, icon size scales responsively from 24px to 32px -->
          <RouterLink to="/home">
            <img src="../assets/images/icons/back_arrow_light_icon.png"
              alt="Light beige back arrow account redirecting to homepage"
              class="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 cursor-pointer hover:opacity-80 transition-opacity duration-200" />
          </RouterLink>

          <!-- Brand logo: Smaller on mobile/tablet for header proportions (48px-56px), larger on desktop (80px-112px) -->
          <img src="../assets/images/logos/logo_light.png" alt="Brand logo light version"
            class="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain" />
        </div>

        <!-- Main branding text: Hidden on mobile/tablet to save space, visible only on desktop with responsive typography -->
        <div class="hidden lg:flex flex-1 items-center py-2 xl:py-4">

          <!-- Text container: Progressive max-width constraints to prevent text from becoming too wide on large screens -->
          <div class="max-w-full sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">

            <!-- Heading text: Large responsive typography (24px-80px) with tight line spacing for readability -->
            <p
              class="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-body text-light-beige-100 leading-tight sm:leading-snug lg:leading-tight xl:leading-snug">

              <!-- Accent text: Salmon color highlight for "Log in" portion -->
              <span class="text-salmon-300">Log in</span> to your Interior
              <!-- Conditional line break: Hidden on mobile, visible from tablet up for better text flow -->
              <br class="hidden sm:block">Stories account.
            </p>
          </div>
        </div>

        <!-- Footer copyright: Hidden on mobile/tablet, visible only on desktop with minimal spacing -->
        <div class="hidden lg:block mt-2 xl:mt-4">

          <!-- Copyright text: Small responsive typography (12px-24px) in medium beige color -->
          <p
            class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-heading text-medium-beige-300">
            © Copyright 2025 Interior Stories
          </p>
        </div>
      </div>
    </div>

    <!-- Form section: Takes remaining space on mobile/tablet, half-width on desktop, centers form content -->
    <div class="flex-1 lg:flex-1 bg-medium-beige-300 flex flex-col items-center justify-center h-full overflow-hidden">

      <!-- Form wrapper: Responsive width constraints and padding, progressively wider on larger screens -->
      <div
        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl px-4 sm:px-6 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-4 xl:py-6">

        <!-- Page title: Large responsive heading (32px-96px) left-aligned above form -->
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading text-dark-aubergine-800 text-left mb-6 sm:mb-8 lg:mb-4 xl:mb-6">
          Login
        </h1>

        <!-- Login form: Vertical flex layout with responsive spacing between form elements -->
        <form id="login-form" class="flex flex-col space-y-4 sm:space-y-6 lg:space-y-4 xl:space-y-6 2xl:space-y-8">

          <!-- Email input group: Label and input with minimal spacing, tighter on desktop -->
          <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">

            <!-- Email label: Responsive typography (16px-32px) with body font -->
            <label for="email"
              class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-aubergine-800">
              Email
            </label>

            <!-- Email input field: Full width with responsive padding, focus ring on interaction -->
            <input id="email" type="email" required
              class="w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 border-0 text-dark-aubergine-800 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none focus:ring-2 focus:ring-dark-aubergine-800 transition-all duration-200" />
          </div>

          <!-- Password input group: Label and input with minimal spacing, tighter on desktop -->
          <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">

            <!-- Password label: Responsive typography (16px-32px) with body font -->
            <label for="password"
              class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-aubergine-800">
              Password
            </label>

            <!-- Password input field: Full width with responsive padding, focus ring on interaction -->
            <input id="password" type="password" required
              class="w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 border-0 text-dark-aubergine-800 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none focus:ring-2 focus:ring-dark-aubergine-800 transition-all duration-200" />
          </div>

          <!-- Error message: Hidden by default, shows when login fails, responsive typography -->
          <p id="login-error-message"
            class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-body text-red-alert-600 text-center hidden">
            Invalid email or password, please try again!
          </p>

          <!-- Submit button: Full width with responsive padding, hover and active states -->
          <button id="login-button" type="submit"
            class="w-full bg-dark-aubergine-800 hover:bg-dark-brown-800 active:scale-95 px-4 py-3 sm:px-6 sm:py-4 lg:px-4 lg:py-3 xl:px-6 xl:py-4 2xl:px-8 2xl:py-5 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-body text-light-beige-100 transition-all duration-200 mt-4 sm:mt-6 lg:mt-3 xl:mt-4 2xl:mt-6 cursor-pointer shadow-lg hover:shadow-xl">
            Sign in
          </button>
        </form>

        <!-- Sign up link section: Centered below form with responsive spacing -->
        <div class="text-center mt-6 sm:mt-8 lg:mt-4 xl:mt-6 2xl:mt-8">

          <!-- Sign up link: Router link with underline, hover effects, responsive typography (12px-24px) -->
          <p
            class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-body text-dark-aubergine-800 underline underline-offset-2 sm:underline-offset-3">
            <RouterLink to="/register" class="hover:text-dark-brown-800 hover:no-underline transition-all duration-200">
              Don't have an account yet? Sign Up!
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import router from '../router/index.js';
import { onMounted } from 'vue';

const auth = useAuthStore();

onMounted(() => {
  const loginForm = document.querySelector('#login-form');
  const loginErrorMessage = document.querySelector('#login-error-message');

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    fetch("http://localhost:8000/api/login", {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw data.error;
        }
        auth.setToken(data.access_token);
        router.push('/home');
      })
      .catch(error => {
        console.log(error);
        loginErrorMessage.classList.remove('hidden');
        loginErrorMessage.classList.add('block');
      })
  });
});
</script>