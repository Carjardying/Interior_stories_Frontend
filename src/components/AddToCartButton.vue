<template>
    <button type="submit" 
        class=" w-full font-body border-1 border-dark-aubergine-800 bg-dark-aubergine-800 text-medium-beige-300 p-2 cursor-pointer hover:bg-light-beige-100 hover:text-dark-aubergine-800"
        @click="addToCart"> 
        + Add to Cart
    </button>

    <div v-if="open" @click.self="closeModal"
        class="fixed inset-0 w-screen h-screen bg-medium-beige-300/50 backdrop flex items-center justify-center z-50 min-h-screen min-w-full">
        <!-- Modal box -->
        <div ref="modal"
            class="modal w-4xl size-90 p-20 place-content-evenly bg-light-beige-100 shadow-lg flex flex-col items-center space-y-4"
            role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
            <span class="text-3xl">Please log in to start shopping !</span>

            <RouterLink to="/login" @click="closeModal"
                class="bg-dark-brown-800 text-medium-beige-300 px-4 py-2 font-body hover:bg-dark-aubergine-800 transition-colors duration-200">
                Click here to log in
            </RouterLink>  
        </div>
    </div>

</template>

<script setup>
import { useCartStore } from '../stores/cart';
import { useAuthStore } from '../stores/auth';
import { defineEmits, defineProps } from 'vue';
import { ref, computed } from 'vue';

const props = defineProps({ 
    furnitureId: {
        type: Number,
        required: true
    },
})

const emit = defineEmits(['item-added']);
const cartStore = useCartStore();
const authStore = useAuthStore();
const open = ref(false);

function addToCart() {

    if (!authStore.isAuthenticated) {
    open.value = true
    return
  }

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

function closeModal() {
    open.value = false
    router.push('/login');
}

</script>