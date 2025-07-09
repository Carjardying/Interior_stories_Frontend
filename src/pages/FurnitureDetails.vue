<template>
    <Header></Header>
    
    <DetailsItem        
          :name="furniture.value.name"
          :price="parseInt(furniture.price).toFixed(2)" 
          :image="furniture.image"
          :alt="furniture.alt"
          :measurements="furniture.measurements"
          :color="furniture.color"
          :material="furniture.material"/>
    <Footer></Footer>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import DetailsItem from "../components/DetailsItem.vue";
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
// console.log(id)
const furniture = ref([]);

function getFurniture(id) {
  fetch(`http://localhost:8000/api/furnitures/${id}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      furniture.value = data;
    })
    .catch(error => {
      console.log(error);
    });
}

onMounted(() => {
  getFurniture(id);
  console.log(furniture)
})
</script>