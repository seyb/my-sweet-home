import Vue from 'vue'
import Vuex from 'vuex'
import { types } from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    improvements: []
  },
  mutations: {
    addImprovement: (state, improvement) => {
      state.improvements.push(improvement)
    }
  },
  actions: {
    addImprovement: (context, payload) => {
      context.commit(types.IMPROVEMENT_ADD, payload)
    }
  },
  modules: {
  }
})
