import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root.jsx';
import { allTodos } from './reducers/selectors';

window.store = configureStore();
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;

const newTodos = [
    {id: 1, title: 'hey'},
    {id: 2, title: 'you'},];

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={configureStore()}/>, document.getElementById('main'));
});
