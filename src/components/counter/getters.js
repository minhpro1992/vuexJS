const getters = {
  count: state => state.count,
  evenOrOdd: state => {
    return state.count % 2 === 0 ? "even" : "odd";
  }
};

export { getters };
