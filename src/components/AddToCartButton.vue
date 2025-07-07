<template>
    <button type="submit" class=" w-full font-body border-1 border-dark-aubergine-800 bg-dark-aubergine-800 text-medium-beige-300 p-2 cursor-pointer hover:bg-light-beige-100 hover:text-dark-aubergine-800" @click="addToCart">
      + Add to Cart
    </button>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useCartStore } from '../stores/cart';
    import { useAuthStore } from '../stores/auth';
    
    const props = defineProps({
        furnitureId: {
            type: Number,
            required: true
        },
    })

    const cartStore = useCartStore()
    const authStore = useAuthStore();
    function addToCart() {
        cartStore.addToCart(props.furnitureId);
        
        fetch("http://localhost:8000/api/order", {
            method: 'Post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authStore.token}`},
            body: JSON.stringify({ furniture_id: props.furnitureId }),
        })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                onMounted();
                router.push('/Catalogue');
            } else {
                throw data.error;
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    
</script>