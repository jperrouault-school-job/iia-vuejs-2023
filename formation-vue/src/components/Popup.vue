<template>
  <div class="popup">
    <div class="header">{{ titre }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>

defineProps({
  titre: String
});

</script>

<style scoped>
.popup {
  border-radius: 4px;
  border: solid 1px #333;
  overflow: hidden;
}

.popup > * {
  padding: 10px;
}

.popup .header {
  background: white;
}

.popup .content {
  background: lightgrey;
}
</style>