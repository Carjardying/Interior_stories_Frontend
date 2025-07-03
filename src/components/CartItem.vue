<template>
    <div class="flex items-start gap-6">
        <img :src="product.image" :alt="product.name" class="w-32 h-32 object-cover" />
        <div class="flex-1">
            <h3 class="text-lg font-body text-dark-aubergine-800 mb-2">
                {{ product.name }}
            </h3>
            <p class="text-sm font-body text-dark-brown-800">
                EUR {{ product.price }}
            </p>
        </div>
        <button class="bg-dark-aubergine-800 px-6 py-2 text-sm font-body text-medium-beige-300">
            Remove
        </button>
    </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>