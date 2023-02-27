<template>
  <prenom-crud :prenoms="prenoms" />
</template>
  
<script setup>
import PrenomCrud from './PrenomCrud.vue';

defineProps({
  prenoms: Array
});
</script>