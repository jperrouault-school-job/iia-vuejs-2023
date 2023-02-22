<script setup>
import { ref } from 'vue';

const prenom = ref('Jérémy');
const prenoms = ref([
  'Toto', 'Tata', 'Titi'
]);


function changer() {
  // Modifier la valeur de prénom : "Nouveau prénom"
  prenom.value = "Nouveau prénom";
}

// function valider(event) {
//   console.log(event);
//   if (event.key == 'Enter') {
//     alert('ok');
//   }
// }

function valider(event) {
  console.log(event);
  alert('ok');
}


const saisiePrenom = ref('');

function ajouterPrenom() {
  prenoms.value.push(saisiePrenom.value);
}

function supprimerPrenom(prenom) {
  const index = prenoms.value.indexOf(prenom); // On récupère la position du prénom à supprimer
  
  // On supprime un élément du tableau à partir de l'index
  prenoms.value.splice(index, 1);
}


const couleur = ref('orange');

</script>

<template>
  <header>
    <h1>Formation VueJS</h1>
  </header>

  <main>
    <p :class="prenom">{{ prenom }}</p>
    <input type="text" v-model="prenom" @keyup.enter="valider($event)" />

    <h2 v-if="prenom != ''">Le prénom est saisi</h2>
    <h2 v-else>Le prénom n'est pas saisi</h2>

    <!-- <button v-on:click="changer()">Changer !</button> -->
    <button @click="changer()">Changer !</button>


    <hr />


    <ul>
      <li v-for="p of prenoms" :key="p">
        {{ p }} <button @click="supprimerPrenom(p)">SUPPRIMER</button>
      </li>
    </ul>

    <input type="text" v-model="saisiePrenom" />
    <button @click="ajouterPrenom()">Ajouter</button>


    <hr />

    <input type="color" v-model="couleur" />

    <select v-model="couleur">
      <option value="red">Rouge</option>
      <option value="blue">Bleu</option>
      <option value="orange">Orange</option>
    </select>

    <p :style="{ color: couleur }">Texte en couleur</p>

  </main>
</template>