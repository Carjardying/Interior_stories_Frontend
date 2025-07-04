<!-- components/FurnitureCard.vue -->
<template>

  <form @submit.prevent="" class="col-span-1  m-8">
          <div class="h-150 overflow-hidden">
            <img
              src="/src/assets/images/furnitures/cassina_lc3_sofa.PNG"
              alt="sofa Cassina"
              class="w-full h-full object-cover"
            />
          </div>
          <h2 class="font-body text-dark-aubergine-800 p-1">Sofa Cassina</h2>
          <p class="font-body text-dark-aubergine-800 p-1">EUR 350,00</p>
          <button type=""submit class=" w-full font-body bg-dark-aubergine-800 text-medium-beige-300 p-2">
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
</script>