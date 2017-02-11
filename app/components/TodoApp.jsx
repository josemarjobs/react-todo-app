var React = require('react')
var uuid = require('node-uuid')

var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TODOS = [
  {id: uuid(), text: 'Walk the dog', completed: false},
  {id: uuid(), text: 'Clean the yard', completed: true},
  {id: uuid(), text: 'Grocery shopping', completed: true},
  {id: uuid(), text: 'Play video games', completed: false},
]

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TODOS,
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {text: text, id: uuid(), completed: false}
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
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div className="todo-app">
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
})

module.exports = TodoApp;