var React = require('react')

var TodoList = require('TodoList');

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

  render: function() {
    var {todos} = this.state;
    return (
      <div className="todo-app">
        <TodoList todos={todos} />
      </div>
    );
  }
})

module.exports = TodoApp;