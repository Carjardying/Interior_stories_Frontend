<template>
    <Header></Header>
    
    <DetailsItem
        v-for="furniture in furnitureDetails" 
          :name="furniture.name"
          :price="parseInt(furniture.price).toFixed(2)" 
          :image="furniture.image"
          :alt="furniture.alt"
          :measurements="furniture.measurements"
          :color="furniture.color"
          :material="furniture.material"
          @item-added="getFurniture"/>

    <Footer></Footer>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import DetailsItem from "../components/DetailsItem.vue";
import { ref, onMounted } from 'vue';

const furnitureDetails = ref([]);

function getFurniture($id) {
  fetch(`http://localhost:8000/api/furnitures/${$id}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      furnitureDetails.value = data;
    })
    .catch(error => {
      console.log(error);
    });
}

onMounted(() => {
  getFurniture();
})
</script>