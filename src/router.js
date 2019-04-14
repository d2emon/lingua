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
        {
          path: 'conlangs',
          name: 'conlangs',
          component: () => import('./views/Conlangs.vue'),
        },
        {
          path: 'phrases',
          name: 'phrases',
          component: () => import('./views/Phrases.vue'),
        },
        {
          path: 'false-friends',
          name: 'falseFriends',
          component: () => import('./views/Translations.vue'),
        },
        {
          path: 'machine-translation',
          name: 'machineTranslation',
          component: () => import('./views/Translations.vue'),
        },
        {
          path: 'translations',
          name: 'translations',
          component: () => import('./views/Translations.vue'),
        },
        {
          path: 'phrase/:phraseId',
          name: 'phrase',
          component: () => import('./views/PhraseTranslations.vue'),
        },
        {
          path: 'slangs',
          name: 'slangs',
          component: () => import('./views/Slangs.vue'),
        },
        {
          path: 'slang/:slangId',
          name: 'slang',
          component: () => import('./views/Slang.vue'),
        },
      ],
    },
  ],
});
