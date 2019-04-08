import { markdown2html } from '../../helpers';
import {
  fetchSlang,
  fetchSlangs,
} from '../../services';

const state = {
  slangs: [],
  slang: null,
};

const getters = {};

const mutations = {
  setSlangs: (state, slangs) => { state.slangs = slangs; },
  setSlang: (state, slang) => { state.slang = slang; },
};

const actions = {
  fetchSlangs: ({ commit }) => fetchSlangs()
    .then(slangs => commit('setSlangs', slangs)),
  selectSlang: ({ commit }, slangId) => fetchSlang(slangId)
    .then(slang => commit('setSlang', slang)),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
