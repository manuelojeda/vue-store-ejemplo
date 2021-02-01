<template>
  <section class="grilla" v-if="!isLoading">
    <div
      v-for="character in characters"
      :key="character.id"
      class="character"
    >
      <img :src="character.image" :alt="character.name">
      <router-link :to="`/character/${character.id}`">
        {{ character.name }}
      </router-link>
    </div>

    <button :disabled="!info.prev" @click="fetchCharacters(info.prev)">
      Previous
    </button>
    <button :disabled="!info.next" @click="fetchCharacters(info.next)">
      Next
    </button>
  </section>
  <section v-else>
    Loading
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { getters, actions } from '../store'
const characters = getters.getItem('characters')
const info = computed(() => {
  return getters.getItem('info').value
})
const isLoading = getters.getItem('isLoading')

const fetchCharacters = (URL) => {
  actions.fetchCharacters(URL)
}
</script>

<style scoped>
.grilla {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 920px;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
