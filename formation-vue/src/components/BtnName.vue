<template>
  <div class="btn-name" :style="{ background: color }">
    <span>{{ name }}</span>
    <button>{{ btnLabel }}</button>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  btnLabel: String,
  color: String
});
</script>

<style scoped>
.btn-name {
  padding: 10px;
  border: solid 1px #333;
}
</style>