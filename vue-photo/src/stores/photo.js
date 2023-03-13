import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePhotoStore = defineStore('photo', () => {
  const photos = ref([]);

  async function load() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await resp.json();

    photos.value = result;
  }

  function remove(photo) {
    const index = photos.value.indexOf(photo);

    photos.value.splice(index, 1);
  }

  return { photos, load, remove };
});
