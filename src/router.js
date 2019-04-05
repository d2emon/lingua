import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Main.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: 'groups',
          name: 'groups',
          component: () => import('./views/Group.vue'),
        },
        {
          path: 'group/:group',
          name: 'group',
          component: () => import('./views/Group.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
      ],
    },
  ],
});
