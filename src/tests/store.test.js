import { describe, it, expect } from 'vitest';
import { createStore } from 'vuex';
import storeConfig from '../store'; // Asegúrate de que esta ruta sea correcta

describe('Vuex Store - Counter Module', () => {
  let store;

  beforeEach(() => {
    store = createStore(storeConfig); // Crea una nueva instancia del store
  });

  it('should have an initial counter value of 0', () => {
    expect(store.state.counter).toBe(0); // Verifica el valor inicial del contador
  });

  it('should increment the counter', () => {
    store.commit('increment'); // Llama a la mutación increment
    expect(store.state.counter).toBe(1); // Verifica que el contador se incrementó
  });

  it('should decrement the counter', () => {
    store.commit('decrement'); // Llama a la mutación decrement
    expect(store.state.counter).toBe(-1); // Verifica que el contador se decrementó
  });
});
