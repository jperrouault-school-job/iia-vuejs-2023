import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

// Définition des routes
const routes = [
  {
    path: '/', name: 'home', component: HomeView
  }
];

// Définition de VueRouter
const router = createRouter({
  history: createWebHistory(), // Mode de navigation du router
  routes // Liste des routes, définies plus haut
});


// Export de VueRouter
export default router;