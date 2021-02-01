import { reactive, toRef } from 'vue'

const store = reactive({
  info: null,
  characters: [],
  isLoading: false
})

export const getters = {
  getStore () {
    return store
  },
  getItem (item) {
    return toRef(store, item)
  }
}

export const setters = {
  setItem (payload, item) {
    store[item] = payload
  }
}

export const actions = {
  async inicializar () {
    store.isLoading = true
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setters.setItem(data.info, 'info')
    setters.setItem(data.results, 'characters')
    store.isLoading = false
  },
  async fetchCharacters (URL) {
    store.isLoading = true
    const response = await fetch(URL)
    const data = await response.json()
    setters.setItem(data.info, 'info')
    setters.setItem(data.results, 'characters')
    store.isLoading = false
  }
}

export default store
