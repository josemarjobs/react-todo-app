var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

import {Todo} from 'Todo';
import * as actions from 'actions';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 122,
      text: 'Do some stuff',
      completed: true
    }
    var action = actions.startToggleTodo(todoData.id, !todoData.completed)

    var spy = expect.createSpy();
    var todoItem = TestUtils.renderIntoDocument(
      <Todo dispatch={spy} {...todoData}/>
    )
    var $el = $(ReactDOM.findDOMNode(todoItem));
    
    TestUtils.Simulate.click($el[0])
    expect(spy).toHaveBeenCalledWith(action);
  })
})
