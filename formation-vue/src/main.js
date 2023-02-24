import { createApp } from 'vue';
import App from './App.vue';
import BtnName from './components/BtnName.vue';

import './assets/main.css';

const app = createApp(App);

// On associe les composants à l'application Vue
app.component('btn-name', BtnName);


app.mount('#app');
