<template>
  <div>
    {{ character }}
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getters } from '../store'
export default {
  setup () {
    const { params } = useRoute()
    const character = computed(() => {
      return getters.getItem('characters').value.filter((value) => value.id === parseInt(params.id))[0]
    })

    return {
      character
    }
  }
}
</script>
