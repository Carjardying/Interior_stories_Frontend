<template>
    <!-- <button class="bg-dark-brown-800 text-medium-beige-300 w-full"
    @click="addToCart">
         + Add to cart 
    </button> -->
    <button type="submit" class=" w-full font-body bg-dark-aubergine-800 text-medium-beige-300 p-2" @click="addToCart">
      + Add to Cart
    </button>
</template>

<script setup>
    import { useCartStore } from '../stores/cart';

    const cartStore = useCartStore()
    function addToCart() {
        // console.log("Click", props.id);
        cartStore.addToCart(props.id);
        // il  doit envoyer l'id passé en propriété dans le store
        // il n'arrive pas à récupérer l'id qui n'est pas ici, 
        // Par contre l'id de furniture est récupéré dans la Catalogue.vue (ligne 9), il faudrait voir comment on peut reprendre cet id dans ce fichier pour le transférer à ce fichier-ci 
    }

    const props = defineProps({
        id: {
            type: String,
            required: true
        },
    }) // définit le type id et éviter d'envoyer des éléments qui ne correspondent pas

</script>