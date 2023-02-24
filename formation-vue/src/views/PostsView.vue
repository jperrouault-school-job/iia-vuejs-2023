<template>
  <h1>Liste des posts</h1>

  <button @click="charger">Charger</button>

  <div v-for="post of posts" :key="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([]);

function charger() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(result => posts.value = result);
}

</script>