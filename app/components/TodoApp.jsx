var React = require('react')
var uuid = require('node-uuid')
var moment = require('moment');

var TodoAPI = require('TodoAPI');
import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    }
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    return (
      <div className="todo-app">
        <h1 className="page-title text-center">Todo app</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodoForm onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>

      </div>
    );
  }
})

module.exports = TodoApp;