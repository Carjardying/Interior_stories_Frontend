<template>
  <div class="min-h-screen flex">
    <!-- Left Side -->
    <div class="flex-1 bg-khaki-900 flex flex-col justify-between p-8 text-light-beige-100 relative">

      <!-- Top section with back arrow and logo -->
      <div class="flex items-center space-x-6 mb-8">
        <!-- Back arrow -->
        <RouterLink to="/home"><img src="../assets/images/icons/back_arrow_light_icon.png"
            alt="Light beige back arrow account redirecting to homepage"
            class="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" /></RouterLink>


        <!-- Light logo component -->
        <img src="../assets/images/logos/logo_light.png" alt="Brand logo light version"
          class="w-30 h-30 object-contain" />
      </div>

      <!-- Center section with main text -->
      <div class="flex-1 flex items-center">
        <div class="max-w-lg">
          <!-- Main text -->
          <p class="text-4xl font-body text-light-beige-100 leading-relaxed">
            <span class="text-salmon-300">Log in</span> to your Interior<br>Stories account.
          </p>
        </div>
      </div>

      <!-- Bottom section with copyright -->
      <div>
        <!-- Copyright -->
        <p class="text-lg font-heading text-medium-beige-300">
          © Copyright 2025 Interior Stories
        </p>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex-1 bg-medium-beige-300 flex flex-col items-center justify-center p-8">
      <div class="w-full max-w-md space-y-8">

        <!-- Dark title -->
        <h1 class="text-6xl font-heading text-dark-aubergine-800 text-jusitfy mb-12">
          Login
        </h1>

        <!-- Form -->
        <form class="space-y-8">
          <!-- Email -->
          <div class="space-y-3">
            <label for="email" class="block text-xl font-body text-dark-aubergine-800">
              Email
            </label>
            <input id="email" type="email" required
              class="w-full px-4 py-4 bg-light-beige-100 border-0 text-dark-aubergine-800 text-lg focus:outline-none focus:ring-2 focus:ring-dark-aubergine-800" />
          </div>

          <!-- Password -->
          <div class="space-y-3">
            <label for="password" class="block text-xl font-body text-dark-aubergine-800">
              Password
            </label>
            <input id="password" type="password" required
              class="w-full px-4 py-4 bg-light-beige-100 border-0 text-dark-aubergine-800 text-lg focus:outline-none focus:ring-2 focus:ring-dark-aubergine-800" />
          </div>

          <!-- Sign in button -->
          <button type="submit"
            class="w-full bg-dark-aubergine-800 hover:bg-dark-brown-800 px-8 py-4 text-lg font-body text-light-beige-100 transition-colors duration-200 mt-8">
            Sign in
          </button>
        </form>

        <!-- Sign Up Link -->
        <div class="text-center mt-8">
          <p class="text-base font-body text-dark-aubergine-800 underline underline-offset-3">
            <RouterLink to="/home">Don't have an account yet? Sign Up! </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//       error: ''
//     };
//   },
//   methods: {
//     login() {
//       // Backend simulation
//       if (this.email === 'test@example.com' && this.password === '1234') {
//         this.$router.push('/home'); // Homepage redirection
//       } else {
//         this.error = 'Email ou mot de passe incorrect';
//       }
//     }
//   }
// };
</script>