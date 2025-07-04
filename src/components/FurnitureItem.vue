<!-- components/FurnitureCard.vue -->
<template>

  <form @submit.prevent="addToCart" class="col-span-1  m-8">
    <div class="h-150 overflow-hidden">
      <img :src="image" :alt="name" class="w-full h-full object-cover" />
    </div>
    <h2 class="font-body text-dark-aubergine-800 p-1">{{ name }}</h2>
    <p class="font-body text-dark-aubergine-800 p-1">EUR {{ price }}</p>
    <button type="submit" class=" w-full font-body bg-dark-aubergine-800 text-medium-beige-300 p-2">
      + Add to Cart
    </button>
  </form>
</template>

<script setup>
defineProps({
  name: String,
  price: String,
  image: String,
});

function addToCart() {
  // faire l'ajout du meuble dans une commande
}
</script>