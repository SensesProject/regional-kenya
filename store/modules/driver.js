import { has, get, set, isUndefined, isNaN, forEach, round, range, map } from 'lodash'

const state = () => {
  return {
    changes: {
      'Corn': {
        'Mexico': {
          '2.6': [4.44, 3.90],
          '6.0': [4.53, 4.05]
        },
        'South Africa': {
          '2.6': [1.83, 0.85],
          '6.0': [2.64, 3.19]
        },
        'Uganda': {
          '2.6': [0.15, 0.12],
          '6.0': [0.24, 0.25]
        }
      },
      'Rice': {
        'Pakistan': {
          '2.6': [0.77, 0.72],
          '6.0': [0.81, 0.87]
        },
        'Thailand': {
          '2.6': [4.73, 3.27],
          '6.0': [5.33, 5.28]
        }
      },
      'Wheat': {
        'Russia': {
          '2.6': [8.97, 7.13],
          '6.0': [10.1, 7.93]
        },
        'Argentina': {
          '2.6': [3.88, 3.11],
          '6.0': [4.56, 4.69]
        },
        'Ukraine': {
          '2.6': [3.95, 2.62],
          '6.0': [4.08, 4.1]
        },
        'Canada': {
          '2.6': [6.26, 4.36],
          '6.0': [6.59, 5.79]
        }
      },
    },
    hover: null,
    rcp: '2.6'
  }
}

const mutations = {
  HOVER_DRIVER (state, index) {
    state.hover = index
  },
  CHANGE_RCP (state, rcp) {
    state.rcp = rcp
  }
}

const actions = {
  hoverDriver ({ commit }, index) {
    commit('HOVER_DRIVER', index)
  },
  changeRCP ({ commit }, rcp) {
    commit('CHANGE_RCP', rcp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
