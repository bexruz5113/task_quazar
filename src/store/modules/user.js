const state = {
  user: {},
};
const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};
const getters = {
  user(state) {
    return state.user;
  },
};
const actions = {
  fetchUser({ commit }, payload) {
    commit("SET_USER", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
