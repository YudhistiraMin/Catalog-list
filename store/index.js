export const state = () => ({
  list:[],
  detail:{}
})

export const mutations = {
  setList(state,payload) {
    state.list = payload;
  },
  setDetail(state,payload) {
    state.detail = payload;
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    
  },
  getList ({ commit }) {
    this.$axios.get('list.json').then((res) =>{
      commit('setList',res.data.data)
    })
  },
  getDetail ({ commit }, params) {
    this.$axios.get(`${params}.json`).then((res) =>{
      commit('setDetail',res.data.data.detail)
    })
  }
}

