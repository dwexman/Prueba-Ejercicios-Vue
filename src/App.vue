<template>
  <div>
    <h1>Vue App with Vuex and Vue Router</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/parent">Parent</router-link> 
    </nav>
    <Counter />
    <router-view /> 
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  components: {
    Counter,
  },
};
</script>
