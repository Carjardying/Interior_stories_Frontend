<!-- components/FurnitureCard.vue -->
<template>
  <form @submit.prevent="" class="col-span-1 m-8">
    <div class="h-150 overflow-hidden">
      <img :src="image" :alt="name" class="w-full h-full object-cover" />
    </div>
    <h2 class="font-body text-dark-aubergine-800 p-1">{{ name }}</h2>
    <p class="font-body text-dark-aubergine-800 p-1">EUR {{ price }}</p>
    <AddToCartButton :furnitureId="id" @item-added="$emit('item-added')"/>
  </form>
</template>

<script setup>
import AddToCartButton from './AddToCartButton.vue';

defineProps({
  id: [String, Number],
  name: String,
  price: Number,
  image: String,
});

</script>