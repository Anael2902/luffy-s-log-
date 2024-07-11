import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Parameter from '../views/ParameterView.vue'
// import Map from '../views/MapView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/login', component: Login },
  {path: '/register', component: Register},
  {path: '/parameter', component: Parameter},
  // {path: '/map', component: Map}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
