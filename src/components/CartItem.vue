<template>
    <div class="flex items-start gap-6">
        <img :src="props.image" :alt="name" class="w-32 h-32 object-cover" />
        <div class="flex-1">
            <h3 class="text-lg font-body text-dark-aubergine-800 mb-2">
                {{ props.name }}
            </h3>
            <p class="text-sm font-body text-dark-brown-800">
                EUR {{ props.price }}
            </p>
        </div>
        <button class="bg-dark-aubergine-800 px-6 py-2 text-sm font-body text-medium-beige-300" @click="removeFromCart">
            Remove
        </button>
    </div>
</template>

<script setup>

    import { useCartStore } from '../stores/cart';
    import { useAuthStore } from '../stores/auth';
    import { defineEmits, defineProps } from 'vue';

    const props = defineProps({
        furnitureId: [String, Number],
        name: String,
        price: Number,
        image: String,
    })

    const emit = defineEmits(['item-removed'])
    const cartStore = useCartStore()
    const authStore = useAuthStore();

    function removeFromCart() {
    
        fetch(`http://localhost:8000/api/orders/${props.furnitureId}`, {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authStore.token}`}
        })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                emit('item-removed');
            } else {
                throw data.error;
            }
        })
        .then(cartStore.removeFromCart(props.furnitureId))
        .catch(error => {
            console.log(error);
        })
    }
</script>