<template>
  <div class="todo" @click="toggleCompleted" :class="{ 'not-completed': !todo.completed }">
    <span>{{ todo.title }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  todo: Object
});

function toggleCompleted() {
  props.todo.completed = !props.todo.completed;
}

</script>

<style scoped>
.todo {
  padding: 10px;
  border: solid #333 1px;
  border-radius: 2px;
  margin-bottom: 2px;
  transition: all 0.25s ease-in-out;
}

.not-completed {
  background: crimson;
  color: white;
}
</style>