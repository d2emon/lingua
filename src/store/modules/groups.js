import {
  fetchSubgroups,
  fetchFamilies,
  fetchFamily,
} from '../../services';

const state = {
  selected: null,
  groups: [],
};

const getters = {};

const mutations = {
  selectGroup: (state, selected) => { state.selected = selected; },
  setGroups: (state, groups) => { state.groups = groups; },
  setSubgroups: (state, { item, groups }) => { item.children = groups; },
};

const actions = {
  fetchGroups: ({ commit }, item) => fetchFamilies(item)
    .then(groups => commit('setGroups', groups)),
  fetchSubgroups: ({ commit }, item) => fetchSubgroups(item)
    .then(groups => commit('setSubgroups', { item, groups })),
  selectGroup: ({ commit }, active) => fetchFamily(active)
    .then(selected => commit('selectGroup', selected)),
  selectGroups: ({ dispatch }, active) => dispatch('selectGroup', (!active.length)
    ? null
    : active[0]),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
