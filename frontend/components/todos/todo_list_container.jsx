import React from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

function mapDispatchToProps(dispatch) {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
