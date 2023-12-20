import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
  ]
})

//add a global navigation guard to check if the websocket is open
router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('isLoggedIn');
  const websocket = window.$websocket; //access websocket directly

  //check if websocket is open and open if not
  if (websocket && websocket.readyState !== websocket.OPEN) {
    websocket.addEventListener('open', () => {
      console.log('Websocket connected');
      checkAuth(next, to, isLogged);
    });
  } else {
    checkAuth(next, to, isLogged);
  }
});

function checkAuth(next, to, isLogged) {
  if(to.name !== 'login' && !isLogged) {
    next({ name: 'login' });
  } else {
    next();
  }
}

export default router
