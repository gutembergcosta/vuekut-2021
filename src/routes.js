import Home from './paginas/Home.vue';
import PaginaLogin from './paginas/PaginaLogin.vue';

export default [
  
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: PaginaLogin,
  },
  {
    path: '/perfil',
    //component: PaginaPerfil,
  },
  {
    path: '/feed',
    //component: PaginaFeed,
  }
];