var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('adds todo on handleAddToto', () => {
    var todoText = 'test text'
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />)

    todoApp.setState({todos: []})
    todoApp.handleAddTodo(todoText)

    expect(todoApp.state.todos.length).toBe(1)
    expect(todoApp.state.todos[0].text).toBe(todoText)
  })

  it('toggles completed value when handleToggle called', () => {
    var todoData = {id: 11, text: 'Do something', completed: false};
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />)
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  })
})