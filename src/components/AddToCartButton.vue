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
    function addToCart() {
        console.log("Click", props.id);
        cartStore.addToCart(props.id);
        // il  doit envoyer l'id passé en propriété dans le store
    }

    const props = defineProps({
        id: {
            type: String,
            required: true
        },
    }) // définir le type id et éviter d'envoyer des éléments qui ne correspondent pas

</script>