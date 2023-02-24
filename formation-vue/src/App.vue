<script setup>
import { ref, inject } from 'vue';
import AscBold from './components/AscBold.vue';
import AscTextField from './components/AscTextField.vue';
import Popup from './components/Popup.vue';
import PrenomListe from './components/PrenomListe.vue';

const $notif = inject('$notif');

const prenom = ref('Jérémy');
const prenoms = ref([
  'Toto', 'Tata', 'Titi'
]);


function changer() {
  // Modifier la valeur de prénom : "Nouveau prénom"
  prenom.value = "Nouveau prénom";
  $notif.error("Le prénom a été changé !");
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
const couleurs = ref([
  { value: 'orange', text: 'Orange' },
  { value: 'red', text: 'Rouge' },
  { value: 'blue', text: 'Bleue' },
  { value: 'yellow', text: 'Jaune' }
]);

const saisieCouleur = ref('');
const saisieTexte = ref('');

function ajouterCouleur() {
  const nouvelleCouleur = {
    value: saisieCouleur.value,
    text: saisieTexte.value
  };

  couleurs.value.push(nouvelleCouleur);
}

const chat = ref('Pica');

</script>

<template>
  <header>
    <h1>Formation VueJS</h1>
  </header>

  <main>
    <router-view />

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

    <input type="color" v-model="saisieCouleur" />
    <input type="text" v-model="saisieTexte" />
    <button @click="ajouterCouleur()">Ajouter la couleur</button>

    <select v-model="couleur">
      <option
        v-for="c of couleurs"
        :value="c.value">
          {{ c.text }}
      </option>
    </select>

    <p :style="{ color: couleur }">Texte en couleur</p>

    <hr />

    <!-- <AscBold />
    <asc-bold /> -->

    <asc-bold :chat="prenom">
      <template #gras>TEXTE {{ chat }} GRAS</template>
      <template #pas-gras>Texte en pas gras</template>
    </asc-bold>

    <hr />

    <asc-text-field label="Le prénom" v-model="prenom" />

    <hr />

    <popup titre="Le titre de la popup">
      <p>Le contenu de la popup ...</p>
      <p>Blablabla</p>
      <button>OK !</button>
    </popup>

    <hr />

    <btn-name v-for="p of prenoms" :key="p"
              :name="p"
              btn-label="Supprimer"
              :color="saisieCouleur"
              @action-au-clique="supprimerPrenom(p)" />


    <hr />

    <prenom-liste :prenoms="prenoms">
      <template #btn="{ prenom }">
        TEST {{ prenom }}
      </template>
    </prenom-liste>

    <hr />

    <p v-demo:[prenom].moda>Utilisateur directive Démo</p>

  </main>
</template>