import React from 'react';
import { allTodos } from '../../reducers/selectors';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todos/todo_list';
// module.exports = () => <h3>Todo List goes here!</h3>;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  callTodoListItem() {
    return this.props.todos.map((todo, idx) => {
      return (<TodoListItem todo={todo} key={idx}/>);
    });
  }

  render() {
    return(
      <div>
        <div>
          <TodoForm props={this.props}/>
        </div>
        <h3>Todo List goes here!</h3>
        <ul>
          {this.callTodoListItem()}
        </ul>
      </div>
    );
  }
}

export default TodoList;
