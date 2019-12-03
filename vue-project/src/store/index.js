import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filerType: '',
    searchVal: '',
    listData: []
  },
  getters: {
    filterListData(state) {
      if(state.filerType === '' && state.searchVal === '') {
        return state.listData
      } else {
        return state.listData.filter(item => item.type === state.filerType && item.title.includes(state.searchVal))
      }
    }
  },
  mutations: {
    setFilterType(state, type) {
      state.filerType = type
    },
    searchData(state, value) {
      state.searchVal = value
    },
    setData(state, data) {
      state.listData = data
    }
  },
  actions: {
    getList({state, commit}) {
      axios.get('/api/list').then(res => {
        // 设置state
        commit('setData', res.data.data)
        console.log('res', res)
      })
    }
  },
  modules: {
  }
})
