<template>
    <Header></Header>
  <div>
    <div class="text-left pt-2 pb-1 sm:pt-3 sm:pb-2 pl-4 sm:pl-8">
      <router-link to="/catalogue" class="flex flex-row items-center gap-1 sm:gap-2">
          <img src="../assets/images/icons/back_arrow_dark_icon.png" alt="Arrow dark version redirecting to catalogue"
            class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <p
          class="text-sm sm:text-base md:text-lg font-body text-dark-aubergine-800 underline underline-offset-2 sm:underline-offset-3 hover:text-dark-brown-800 transition-colors duration-200">
          Back</p>
      </router-link>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 py-2 md:py-4 px-4 md:px-8 min-h-[calc(100vh-theme(spacing.28))] sm:min-h-[calc(100vh-theme(spacing.32))] md:min-h-[calc(100vh-theme(spacing.36))]">

      <div class="flex items-center justify-center h-56 sm:h-64 md:h-full pb-2 md:pb-0">
        <img :src="furniture[0].image" :alt="alt" class="max-h-full w-full object-contain" />
      </div>

      <div class="flex flex-col px-0 sm:px-4 md:px-0 text-dark-aubergine-800 overflow-hidden">
        <h1 class="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl p-0.5">
          {{ furniture[0].name }}
        </h1>
        <p class="font-body text-sm sm:text-base md:text-lg p-0.5">
          EUR {{ furniture[0].price }}
        </p>
        <AddToCartButton :furnitureId="furniture[0].id" @item-added="handleItemAdded" class="my-1 sm:my-2" />

        <hr
          class="h-px mt-6 mb-2 sm:mt-8 sm:mb-3 bg-dark-beige-400 border-0 border-t border-solid border-dark-beige-400">

        <p class="font-body text-base sm:text-lg md:text-xl mt-1">Description</p>
        <p class="font-body text-xs sm:text-sm md:text-base mt-0.5 mb-2 text-justify">
          {{ furniture[0].description }}
        </p>
        <hr class="h-px mb-2 bg-dark-beige-400 border-0 border-t border-solid border-dark-beige-400">

        <p class="font-body text-base sm:text-lg md:text-xl mt-1">Details</p>
        <p class="font-body text-xs sm:text-sm md:text-base mt-0.5">
          Measurements: {{ furniture[0].measurements }}
        </p>
        <p class="font-body text-xs sm:text-sm md:text-base">
          Color: {{ furniture[0].color }}
        </p>
        <p class="font-body text-xs sm:text-sm md:text-base mb-2">
          Material: {{ furniture[0].material }}
        </p>
        <hr class="h-px mb-2 bg-dark-beige-400 border-0 border-t border-solid border-dark-beige-400">
      </div>

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