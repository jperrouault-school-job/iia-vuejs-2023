<template>

  <div>
    <label>{{ label }}</label>
    <input type="text" :value="modelValue" />
  </div>

</template>

<script setup>

defineProps({
  label: String,
  modelValue: String
});

</script>