<script setup>
import { ref } from "vue";


// Déclaration de la variable "tableau de todos"
const todos = ref([
  {
    id: 1,
    title: "Boire un café",
    completed: false,
    userId: 10
  }, {
    id: 2,
    title: "Créer une application Vue",
    completed: true,
    userId: 9
  }
]);

// On déclare la variable qui servira pour le formulaire "Ajouter todo"
const formTodo = ref({});

// On déclare la fonction "ajouter un todo"
function ajouterTodo() {
  todos.value.push(formTodo.value);
  formTodo.value = {};
}

// On déclare la fonction "supprimer un todo"
function supprimerTodo(todo) {
  const index = todos.value.indexOf(todo);

  // A partir de l'index, on supprimer 1 élément du tableau
  todos.value.splice(index, 1);
}

</script>

<template>
  <h1>Liste des todos</h1>
  
  <div>
    <label>ID : </label>
    <input type="text" v-model="formTodo.id" />
  </div>

  <div>
    <label>Titre : </label>
    <input type="text" v-model="formTodo.title" />
  </div>
  
  <div>
    <label>Complété ? : </label>
    <input type="checkbox" v-model="formTodo.completed" />
  </div>
  
  <div>
    <label>Utilisateur : </label>
    <input type="text" v-model="formTodo.userId" />
  </div>
  
  <div>
    <button @click="ajouterTodo()">Ajouter</button>
  </div>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Titre</th>
        <th>Complété ?</th>
        <th>Utilisateur</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <!-- <tr v-for="todo of todos" :key="todo.id" :class="{ 'incomplet': !todo.completed }"> -->
      <tr v-for="todo of todos" :key="todo.id" :style="{ background: todo.completed ? '' : 'red' }">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>
          <template v-if="todo.completed">OUI</template>
          <template v-else>NON</template>
        </td>
        <td>{{ todo.userId }}</td>
        <td>
          <button @click="supprimerTodo(todo)">Supprimer</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<style scoped>
.incomplet {
  background: crimson;
}
</style>