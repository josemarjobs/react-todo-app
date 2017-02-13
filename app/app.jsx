var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp')

var actions = require('actions')
var store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New State', store.getState())
})

// load foundation
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
