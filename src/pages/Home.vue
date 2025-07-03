<template>
  <div class="bg-dark-aubergine-800 h-dvh">
    <Header></Header>

    <div class="bg-dark-aubergine-800 h-dvh">
      <img
        src="/src/assets/images/interior/homepage_picture.PNG"
        alt="Homepage image"
        class="imageHome"
      />

      <div class="text-medium-beige-300 flex items-center justify-between">
        <h1 class="font-heading text-6xl m-[2rem]">Interior Stories</h1>
        <p class="font-body m-[2rem]">
          We curate statement pieces that turn living <br />
          spaces into narratives of your life.
        </p>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style></style>
