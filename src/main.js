import { createApp } from 'vue';
import App from './App.vue';
import store from '../src/store'; 
import router from './router';


const app = createApp(App);

app.use(store); // Agrega el store a la instancia de Vue
app.use(router); // Agrega el router a la instancia de Vue
app.mount('#app');
