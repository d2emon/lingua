const state = {
  title: 'Языки',
  subtitle: 'Полезно иногда знать иностранные языки.',
  pages: [
    {
      title: 'Главная',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'О нас',
      icon: 'mdi-folder',
      to: '/about',
    },
    {
      title: 'Индоевропейские языки',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'Искусственные',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'Красота не спасет мир',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'Ложные друзья переводчика',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'Машинный перевод',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'Русский язык',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'На разных языках',
      icon: 'mdi-folder',
      to: '/',
    },
    {
      title: 'Сленг',
      icon: 'mdi-folder',
      to: '/',
    },
  ],
  items: [
    {
      icon: 'mdi-folder',
      iconClass: 'grey lighten-1 white--text',
      title: 'Photos',
      subtitle: 'Jan 9, 2014',
    },
    {
      icon: 'mdi-folder',
      iconClass: 'grey lighten-1 white--text',
      title: 'Recipes',
      subtitle: 'Jan 17, 2014',
    },
    {
      icon: 'mdi-folder',
      iconClass: 'grey lighten-1 white--text',
      title: 'Work',
      subtitle: 'Jan 28, 2014',
    },
  ],
  items2: [
    {
      icon: 'mdi-clipboard-text',
      iconClass: 'blue white--text',
      title: 'Vacation itinerary',
      subtitle: 'Jan 20, 2014',
    },
    {
      icon: 'mdi-card-text',
      iconClass: 'amber white--text',
      title: 'Kitchen remodel',
      subtitle: 'Jan 10, 2014',
    },
    {
      icon: 'mdi-pirate',
      iconClass: 'amber white--text',
      title: 'Kitchen remodel',
      subtitle: 'Jan 10, 2014',
    },
  ],
  // ----
  // articles: require('@/data/articles.json'),
  drawer: false,
  /*
  items: [
    {
      text: 'Home',
      to: '/'
    },
    {
      text: 'About',
      href: '#about'
    }
  ]
  */
};

const getters = {
  /*
  categories: state => {
    const categories = []

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue

      const text = article.category

      categories.push({
        text,
        to: `/category/${text}`
      })
    }

    return categories.sort().slice(0, 4)
  },
  */
  // links: (state, getters) => state.items.concat(getters.categories),
  links: state => state.pages,
};

const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
