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
  setSelected: (state, selected) => { state.selected = selected; },
  setGroups: (state, groups) => { state.groups = groups; },
  setSubgroups: (state, { item, groups }) => { item.children = groups; },
};

const actions = {
  fetchGroups: ({ commit }, item) => fetchFamilies(item)
    .then(groups => commit('setGroups', groups)),
  fetchSubgroups: ({ commit }, item) => fetchSubgroups(item)
    .then(groups => commit('setSubgroups', { item, groups })),
  selectGroup: ({ dispatch, commit, state }, active) => fetchFamily(active)
    .then(selected => (active
      ? selected
      : dispatch('fetchGroups')
        .then(() => ({ children: state.groups }))
    ))
    .then(selected => commit('setSelected', selected)),
  selectGroups: ({ dispatch }, active) => active.length && dispatch('selectGroup', active[0]),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
