<template>
  <router-view />
</template>

<script setup>
import { getters } from './store'
const store = getters.getStore()
</script>
