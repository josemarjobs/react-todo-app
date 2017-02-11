var React = require('react')
var uuid = require('node-uuid')
var moment = require('moment');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

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
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text, 
          id: uuid(), 
          completed: false,
          createdAt: moment().unix(),
          completedAt: null,
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : null;
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    return (
      <div className="todo-app">
        <TodoSearch onSearch={this.handleSearch}/>
        <br/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
})

module.exports = TodoApp;