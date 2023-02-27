<template>
  <ul>
    <li v-for="prenom of prenomStore.prenoms" :key="prenom">
      {{ prenom }}
    </li>
  </ul>
</template>

<script setup>
import { usePrenomStore } from '@/stores/prenom';

const prenomStore = usePrenomStore();

</script>