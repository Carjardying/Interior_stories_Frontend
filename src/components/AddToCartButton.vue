<template>
    <button type="submit"
        class=" w-full font-body border-1 border-dark-aubergine-800 bg-dark-aubergine-800 text-medium-beige-300 p-2 cursor-pointer hover:bg-light-beige-100 hover:text-dark-aubergine-800"
        @click="addToCart">
        + Add to Cart
    </button>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
import { useAuthStore } from '../stores/auth';
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
    furnitureId: {
        type: Number,
        required: true
    },
})

const emit = defineEmits(['item-added'])
const cartStore = useCartStore()
const authStore = useAuthStore();

function addToCart() {
    cartStore.addToCart(props.furnitureId);

    fetch("http://localhost:8000/api/orders", {
        method: 'Post',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authStore.token}` },
        body: JSON.stringify({ furniture_id: props.furnitureId }),
    })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                emit('item-added'); //use for order to mother class (here: message to tell item added and reload page catalog in FurnitureItem > Catalog)
            } else {
                throw data.error;
            }
        })
        .catch(error => {
            console.log(error);
        })
}
</script>