var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

var TodoList = require('TodoList')
var Todo = require('Todo')

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('renders one Todo component for each todo item', () => {
    var todos = [{id: 1, text: 'do something'},
      {id: 2, text: 'check mail'}]
    
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
    expect(todosComponents.length).toBe(todos.length);
  })

  it('renders empty message if no todos', () => {
    var todos = []
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  })
})