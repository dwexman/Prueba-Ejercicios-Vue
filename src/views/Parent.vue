<template>
  <div>
    <h1>Parent Component</h1>
    <p>Message from Child: {{ message }}</p>
    <Child @sendMessage="updateMessage" />
  </div>
</template>

<script>
import Child from '../components/Child.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
      message: '', // Texto recibido del componente hijo
    };
  },
  methods: {
    updateMessage(newMessage) {
      this.message = newMessage; // Actualiza el mensaje con el texto enviado desde el componente hijo
    },
  },
};
</script>
