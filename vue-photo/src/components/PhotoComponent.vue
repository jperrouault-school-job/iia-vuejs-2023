<template>
  <div class="photo">
    <div class="image">
      <img :src="photo.url" :alt="photo.title" />
    </div>

    <div class="title">
      <slot :photo="photo">
        {{ photo.title }}
      </slot>
    </div>

    <button @click="remove">Supprimer</button>
  </div>
</template>

<script setup>
defineProps({
  photo: Object
});
const emit = defineEmits([ 'deleted' ]);

function remove() {
  emit('deleted');
}

</script>

<style scoped>
.photo {
  margin: 5px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 2px;
}

.photo img {
  max-width: 100%;
}
</style>