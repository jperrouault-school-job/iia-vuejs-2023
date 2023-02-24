<template>
  <template v-for="p of prenoms">
    <slot name="btn" :prenom="p">
      <btn-name :key="p"
                :name="p"
                color="white"
                btn-label="RIEN" />
    </slot>
  </template>
</template>
  
<script setup>
defineProps({
  prenoms: Array
});
</script>