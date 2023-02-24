import { createApp } from 'vue';
import App from './App.vue';
// import BtnName from './components/BtnName.vue';
// import DemoDirective from './directives/demo';
// import NotifService from './services/notif';
import DemoPlugin from './plugins/demo';

import './assets/main.css';

const app = createApp(App);

app.use(DemoPlugin);

// // On associe les composants à l'application Vue
// app.component('btn-name', BtnName);

// // On associe les directives à l'application Vue
// app.directive('demo', DemoDirective);

// // On associe les services à l'application Vue
// app.provide('$notif', NotifService);

app.mount('#app');
