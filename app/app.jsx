var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp')

// load foundation
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
