<template>
    <div @submit.prevent="" class="flex-row m-8">

        <div class="h-150">
            <img src="../assets/images/furnitures/adam_wood_shelves.jpg" :alt="name" class="h-full object-cover" />
        </div>

        <div class="flex-column">
            <h1 class="font-heading text-dark-aubergine-800 p-1">NOM{{ name }}</h1>
            <p class="font-body text-dark-aubergine-800">Description du produit {{ description }}</p>
            <p class="font-body text-dark-aubergine-800 p-1">EUR {{ price }}</p>

            <AddToCartButton :furnitureId="id" @item-added="$emit('item-added')"/>
        </div>
    </div>
</template>

<script setup>
import AddToCartButton from './AddToCartButton.vue';
</script>