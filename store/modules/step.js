import { has, get, set, isUndefined, isNaN, forEach } from 'lodash'

const state = () => {
  return {
    step: 0
  }
}

const mutations = {
  CHANGE_STEP (state, step) {
    state.step = step
  }
}

const actions = {
  setStep ({ state, commit, dispatch }, n) {
    commit('CHANGE_STEP', n)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
