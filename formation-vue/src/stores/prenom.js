import { defineStore } from 'pinia';
import { ref } from 'vue';

// On exporte la définition du Store
export const usePrenomStore = defineStore('prenom', () => {
  const prenoms = ref([ 'Babar', 'Toto', 'Titi', 'Tata' ]);


  // Ici, on retourne les valeurs qu'on veut exposer au public
  return { prenoms };
});