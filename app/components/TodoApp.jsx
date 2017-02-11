var React = require('react')
var uuid = require('node-uuid')

var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TODOS = [
  {id: uuid(), text: 'Walk the dog'},
  {id: uuid(), text: 'Clean the yard'},
  {id: uuid(), text: 'Grocery shopping'},
  {id: uuid(), text: 'Play video games'},
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
        {text: text, id: uuid()}
      ]
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div className="todo-app">
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
})

module.exports = TodoApp;