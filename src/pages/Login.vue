<!-- Page à modifier par la suite -->


<template>
  <div>
    <h1>Connexion</h1>
    <!-- prevenir l'envoi du form en lançant login() -->
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      // Je simule le backend
      if (this.email === 'test@example.com' && this.password === '1234') {
        this.$router.push('/home'); // redirection la Homepage
      } else {
        this.error = 'Email ou mot de passe incorrect';
      }
    }
  }
};
</script>