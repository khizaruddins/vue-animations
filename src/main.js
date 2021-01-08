import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: AllUsers,},
    {path: '/goals', component: CourseGoals,}
  ]
})
const app = createApp(App);

app.use(router);

app.component('base-modal', BaseModal);

router.isReady().then(()=>{
  app.mount('#app');
})