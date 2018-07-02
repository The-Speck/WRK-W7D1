import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

// const initialState = { todo: {} };
const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = merge({}, state);

      action.todos.map((obj) => {
        newState = merge(newState, { [obj.id]: obj});
        // const { title, body, id, done } = obj;
        // newState = merge(newState, { [id]: { title, body, done, id }});
      });
      return newState;
    case RECEIVE_TODO:
      const newTODO = merge({}, state);
      // const { title, body, id, done } = action;
      return merge(newTODO, { [action.todo.id]: action.todo });
    default:
      return state;
  }
};

export default todosReducer;
