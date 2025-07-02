import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './style.css';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');


/* <template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <RouterLink to="/home">Home Page</RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import router from '../router/index.js';

const auth = useAuthStore();
const email = ref('');
const password = ref('');
const error = ref('');

function login() {
  auth.setUser(email.value, password.value);
  router.push('/home')
}
</script>

<template>
  <h2>Bienvenue sur la page d'accueil</h2>
  <p class="text-xl bg-dark-aubergine-800 text-light-beige-100">{{ auth.userId }}</p>
  <p>{{ auth.token }}</p>
  <RouterLink to="/login">Login Page</RouterLink>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore();
</script> */