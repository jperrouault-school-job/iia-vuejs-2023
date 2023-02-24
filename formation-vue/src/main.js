import { createApp } from 'vue';
import App from './App.vue';
import BtnName from './components/BtnName.vue';
import DemoDirective from './directives/demo';

import './assets/main.css';

const app = createApp(App);

// On associe les composants à l'application Vue
app.component('btn-name', BtnName);

// On associe les directives à l'application Vue
app.directive('demo', DemoDirective);

app.mount('#app');
