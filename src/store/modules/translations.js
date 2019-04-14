import {
  fetchPhrases,
  fetchTranslation,
} from '../../services';

export default {
  namespaced: true,
  state: {
    phrases: [],
    translation: null,
  },
  // getters: {},
  mutations: {
    setPhrases: (state, value) => { state.phrases = value; },
    setTranslation: (state, value) => { state.translation = value; },
  },
  actions: {
    fetchPhrases: ({ commit }) => fetchPhrases()
      .then(response => commit('setPhrases', response)),
    selectTranslation: ({ commit }, translationId) => fetchTranslation(translationId)
      .then(response => commit('setTranslation', response)),
  },
};
