import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
// import BtnName from './components/BtnName.vue';
// import DemoDirective from './directives/demo';
// import NotifService from './services/notif';
import DemoPlugin from './plugins/demo';
import router from './router';

import './assets/main.css';

const app = createApp(App);
const pinia = createPinia();

// On associe les plugins à l'application Vue
app.use(DemoPlugin);
app.use(router); // Pour VueRouter, c'est le minimum !
app.use(pinia); // Pour Pinia, c'est le minimum !

// // On associe les composants à l'application Vue
// app.component('btn-name', BtnName);

// // On associe les directives à l'application Vue
// app.directive('demo', DemoDirective);

// // On associe les services à l'application Vue
// app.provide('$notif', NotifService);

app.mount('#app');
