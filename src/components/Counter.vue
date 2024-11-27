<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['counter']), // Obtener el valor del contador desde Vuex
  },
  methods: {
    ...mapActions(['increment', 'decrement']), // Acciones para incrementar y decrementar
  },
};
</script>
