export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

export const receiveTodo = (todo) => {

  // let { title, body, done, id } = obj;
  todo.id = todo.id || Math.floor(Math.random() * 100000);
  todo.done = false;
  return {
    type: RECEIVE_TODO,
    todo
  };
};
