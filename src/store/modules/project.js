import axios from "axios";

const state = {
  project: [],
};
const mutations = {
  GET_PROJECT(state, payload) {
    state.project = payload;
  },
};
const getters = {
  project(state) {
    return state.project;
  },
};
const actions = {
  getProject({ commit }) {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        console.log(result);
        commit("GET_PROJECT", result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
