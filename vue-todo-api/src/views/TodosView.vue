<template>
  <h1>Liste des todos</h1>

  <todo v-for="todo of todos"
        :key="todo.id"
        :todo="todo" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Todo from '@/components/TodoComponent.vue';

const todos = ref([]);

onMounted(load);

async function load() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await resp.json();

    todos.value = result;
  }

  catch (err) {
    console.error(err);
  }
}

</script>