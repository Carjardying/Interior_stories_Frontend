<template>
  <div class="bg-light-beige-100 min-h-100">
    <Header></Header>
    <div>
      <h1 class="font-heading text-6xl  m-[2rem] text-dark-aubergine-800">Furnitures</h1>
    </div>
    <div class=" m-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FurnitureItem 
          v-for="furniture in furnitureList" 
          :id="furniture.id" 
          :name="furniture.name"
          :price="parseInt(furniture.price).toFixed(2)" 
          :image="furniture.image"
          :alt="furniture.alt"
          @item-added="reloadFurnitures" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import FurnitureItem from '../components/FurnitureItem.vue';
import { ref, onMounted } from 'vue';

const furnitureList = ref([]);

function reloadFurnitures() {
  fetch("http://localhost:8000/api/furnitures", {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      furnitureList.value = data;
    })
    .catch(error => {
      console.log(error);
    });
}

onMounted(() => {
  reloadFurnitures();
})
</script>
