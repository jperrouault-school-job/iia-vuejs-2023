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
        {{ p }}
      </li>
    </ul>


  </main>
</template>