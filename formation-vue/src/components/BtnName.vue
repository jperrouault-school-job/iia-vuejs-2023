<template>
  <div class="btn-name" :style="{ background: color }">
    <span>{{ name }}</span>
    <button @click="utilisateurClique">{{ btnLabel }}</button>
  </div>
</template>

<script setup>

// Définition des properties
defineProps({
  name: String,
  btnLabel: String,
  color: String
});

// Définition des évènements
const emit = defineEmits([ 'actionAuClique' ]);

function utilisateurClique() {
  // Déclencher l'évènement
  emit('actionAuClique');
}

</script>

<style scoped>
.btn-name {
  padding: 10px;
  border: solid 1px #333;
}
</style>