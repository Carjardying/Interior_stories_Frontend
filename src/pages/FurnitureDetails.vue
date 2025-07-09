<template>
    <Header></Header>

    <div v-if="furniture[0]" class="flex-row m-8">

        <div class="h-150">
            <img :src="furniture[0].image" :alt="furniture[0].alt" class="h-full object-cover" />
        </div>

        <div class="flex-column">
            <h1 class="font-heading text-dark-aubergine-800 p-1">{{ furniture[0].name }}</h1>
            <p class="font-body text-dark-aubergine-800 p-1">EUR {{ furniture[0].price }}</p>
            <AddToCartButton :furnitureId="furniture[0].id" @item-added="handleItemAdded">
            </AddToCartButton>

            <p class="font-body text-dark-aubergine-800">Description</p>
            <p class="font-body text-dark-aubergine-800">{{ furniture[0].description }}</p>
            <p class="font-body text-dark-aubergine-800">Details</p>
            <p class="font-body text-dark-aubergine-800">Measurements: {{ furniture[0].measurements }}</p>
            <p class="font-body text-dark-aubergine-800">Color: {{ furniture[0].color }}</p>
            <p class="font-body text-dark-aubergine-800">Material: {{ furniture[0].material }}</p>
        </div>

    </div>
    <Footer></Footer>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AddToCartButton from '../components/AddToCartButton.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import router from '../router/index.js';

const route = useRoute();
const id = route.params.id;
const furniture = ref([]);
const emit = defineEmits(['item-added']);

function getFurniture(id) {
    fetch(`http://localhost:8000/api/furnitures/${id}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            furniture.value = data;
            console.log(furniture)
        })
        .catch(error => {
            console.log(error);
        });
}
getFurniture(id);

function handleItemAdded() {
    emit('item-added');
    router.push('/catalogue');
}
</script>