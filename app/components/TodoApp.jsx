var React = require('react')

var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');

var TODOS = [
  {id: 1, text: 'Walk the dog'},
  {id: 2, text: 'Clean the yard'},
  {id: 3, text: 'Grocery shopping'},
  {id: 4, text: 'Play video games'},
]

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TODOS
    }
  },
  handleAddTodo: function (text) {
    var todo = {text: text, id: this.state.todos.length + 1}
    this.state.todos.push(todo)
    this.setState({todos: this.state.todos})
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div className="todo-app">
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
})

module.exports = TodoApp;