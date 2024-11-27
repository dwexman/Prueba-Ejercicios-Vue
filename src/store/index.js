import { createStore } from 'vuex';

const store = createStore({
  state: {
    counter: 0, // Estado inicial
  },
  mutations: {
    increment(state) {
      state.counter++; // Incrementar el contador
    },
    decrement(state) {
      state.counter--; // Decrementar el contador
    },
  },
  getters: {
    counter: (state) => state.counter, // Getter para obtener el contador
  },
});

export default store;
