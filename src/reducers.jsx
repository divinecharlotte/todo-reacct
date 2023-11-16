import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actions';

const initialState = {
  todos: []
};


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text
          }
        ]
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        )
      };
    default:
      return state;
  }
};

export default todoReducer;
