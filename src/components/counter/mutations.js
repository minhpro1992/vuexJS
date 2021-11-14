const mutations = {
  increment (state) {
    state.count++;
  },

  decrement (state) {
    if (state.count > 0) {
      state.count--;
    }
  }
};

export { mutations };
