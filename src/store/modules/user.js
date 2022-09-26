const getDefaultState = () => {
  return {
    token: null
  }
}

const state = getDefaultState()

const mutations = {
  // token令牌
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

