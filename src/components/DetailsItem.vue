<template>

    <div @submit.prevent="" class="flex-row m-8">

        <div class="h-150">
            <img :src="image" :alt="name" class="h-full object-cover" />
        </div>

        <div class="flex-column">
            <h1 class="font-heading text-dark-aubergine-800 p-1">{{ name }}</h1>
            <p class="font-body text-dark-aubergine-800">Description</p>
            <p class="font-body text-dark-aubergine-800">{{ description }}</p>
            <p class="font-body text-dark-aubergine-800">Details</p>
            <p class="font-body text-dark-aubergine-800">Measurements: {{ measurements }}</p>
            <p class="font-body text-dark-aubergine-800">Color: {{ color }}</p>
            <p class="font-body text-dark-aubergine-800">Material: {{ material }}</p>
            <p class="font-body text-dark-aubergine-800 p-1">EUR {{ price }}</p>

            <AddToCartButton :furnitureId="id" @item-added="$emit('item-added')" />
        </div>
    </div>

</template>

<script setup>
import AddToCartButton from './AddToCartButton.vue';

defineProps({
    id: [String, Number],
    name: String,
    price: Number,
    image: String,
    description: String,
    measurements: String,
    color: String,
    material: String,
    alt: String,
});
</script>