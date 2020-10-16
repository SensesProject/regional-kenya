const state = () => {
  return {
    essp: false
  }
}

const mutations = {
  SET_ESSP (state, essp) {
    state.essp = essp
  }
}

const actions = {
  setESSP ({ commit }, essp) {
    commit('SET_ESSP', essp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
