import axios from 'axios';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';

const actions = {
  fetchTodos: ({ commit }) => {
    commit(SET_LOADING_STATUS, true);
    console.log('fetchTodos');
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => {
        commit(SET_LOADING_STATUS, false);
        commit(SET_TODOS, response.data);
      })
      .catch(error => {
        commit(SET_LOADING_STATUS, error);
      });
  },
  addTodo: ({ commit }) => {
    commit(ADD_TODO);
  }
};

export { actions };
