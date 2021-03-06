var React = require('react')
var uuid = require('node-uuid')
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function() {
    
    return (
      <div className="todo-app">
        <h1 className="page-title text-center">Todo app</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodoForm />
            </div>
          </div>
        </div>

      </div>
    );
  }
})

module.exports = TodoApp;