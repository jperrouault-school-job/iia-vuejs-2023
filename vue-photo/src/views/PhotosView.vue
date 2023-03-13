<template>
  <h1>Liste des photos</h1>

  <photo  v-for="photo of photoStore.photos"
          :key="photo.id"
          :photo="photo"
          @deleted="onDelete(photo)"
          #="{ photo }">
    AUTRE TEMPLATE => {{ photo.title }}
  </photo>
</template>

<script setup>
import { onMounted } from 'vue';
import Photo from '@/components/PhotoComponent.vue';
import { usePhotoStore } from '@/stores/photo';

const photoStore = usePhotoStore();

onMounted(photoStore.load);

function onDelete(photo) {
  photoStore.remove(photo);
}
</script>
