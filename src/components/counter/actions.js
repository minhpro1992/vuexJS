const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfEven: ({ commit, state }) => {
    if (state.count % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync: ({ commit, state }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 3000);
    });
  }
};

export { actions };
