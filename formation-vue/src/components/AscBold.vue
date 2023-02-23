<template>
  
  <div>
    <strong>
      <slot name="gras">
        Am
      </slot>
    </strong>

    <slot name="pas-gras">
      Par défaut
    </slot>
  </div>

  <div @click="demoProps">
    Le chat s'appelle {{ chat }}.
  </div>

</template>

<script setup>
import { ref } from 'vue';

// const chat = ref('Albert');

const props = defineProps({
  chat: String
});

function demoProps() {
  alert(props.chat);
}

</script>

<style scoped>
strong {
  font-weight: bold;
}
</style>