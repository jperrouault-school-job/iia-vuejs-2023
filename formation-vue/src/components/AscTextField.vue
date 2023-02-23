<template>

  <div>
    <label>{{ label }}</label>
    <input type="text" :value="valeur" />
  </div>

</template>

<script setup>

defineProps({
  label: String,
  valeur: String
});

</script>