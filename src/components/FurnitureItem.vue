<!-- components/FurnitureCard.vue -->
<template>
  <form @submit.prevent="" class="col-span-1 m-8">
    <RouterLink :to="`/furniture-details/${props.id}`">
      <div class="h-150 overflow-hidden">
        <img :src="props.image" :alt="props.alt" class="w-full h-full object-cover" />
      </div>
      <h2 class="font-body text-dark-aubergine-800 p-1">{{ props.name }}</h2>
      <p class="font-body text-dark-aubergine-800 p-1">EUR {{ props.price }}</p>
    </RouterLink>

    <AddToCartButton :furnitureId="props.id" @item-added="$emit('item-added')"/>
  </form>
</template>

<script setup>
import AddToCartButton from './AddToCartButton.vue';


const props = defineProps({
  id: [String, Number],
  name: String,
  price: Number,
  image: String,
  alt: String,
});

</script>