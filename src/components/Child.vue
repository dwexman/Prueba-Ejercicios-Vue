<template>
  <div>
    <h2>Child Component</h2>
    <input v-model="inputText" placeholder="Type a message" />
    <button @click="sendMessage">Send to Parent</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '', // Texto ingresado por el usuario
    };
  },
  methods: {
    sendMessage() {
      this.$emit('sendMessage', this.inputText); // Emite el texto al componente padre
    },
  },
};
</script>
