// import { SET_LOADING_STATUS, SET_TODOS, ADD_TODO } from './actions';
const mutations = {
  SET_LOADING_STATUS: (state, status) => (state.isLoading = status),
  SET_TODOS: (state, todos) => (state.todos = todos),
  ADD_TODO: state => {
    return (state.todos = state.todos.concat({
      id: state.todos.length + 1,
      title: state.text
    }));
  },
  GET_TODO_DETAIL: (state, selectedTodo) => (state.todo = selectedTodo)
};

export { mutations };
