import * as types from '../mutation-types'

// initial state
const state = {
  courses: []
}

// getters
const getters = {
}

// actions
const actions = {

}

// mutations
const mutations = {
  [types.REFRESH_COURSES] (state, courses) {
    state.courses = courses
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
