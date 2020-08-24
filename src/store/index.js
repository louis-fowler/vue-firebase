import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("setLoggedIn", user !== null);
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    }
  }
});
