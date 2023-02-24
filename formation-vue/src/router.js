import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import PrenomView from './views/PrenomView.vue';

// Définition des routes
const routes = [
  {
    path: '/', name: 'home', component: HomeView
  },
  {
    path: '/prenom', name: 'prenom', component: PrenomView
  }
];

// Définition de VueRouter
const router = createRouter({
  history: createWebHistory(), // Mode de navigation du router
  routes // Liste des routes, définies plus haut
});


// Export de VueRouter
export default router;