import BtnName from '@/components/BtnName.vue';
import DemoDirective from '@/directives/demo';
// import NotifService from '@/services/notif';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default {
  install: app => {
    // On associe les composants à l'application Vue
    app.component('btn-name', BtnName);

    // On associe les directives à l'application Vue
    app.directive('demo', DemoDirective);

    // On associe les services à l'application Vue
    // app.provide('$notif', NotifService);
    app.provide('$notif', new Notyf());
  }
}