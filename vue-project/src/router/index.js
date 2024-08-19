import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Map from '../views/MapView.vue';
import Parameter from '../views/ParameterView.vue';
import Account from '../views/AccountView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/login', component: Login },
  {path: '/register', component: Register},
  {path: '/map', component: Map},
  {path: '/parameter', component: Parameter},
  {path: '/account', component: Account}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
