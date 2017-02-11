var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

var Todo = require('Todo')

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('call onToggle when checkd/unchecked', () => {
    var spy = expect.createSpy();
    var todoItem = TestUtils.renderIntoDocument(<Todo onToggle={spy} id={11}/>)
    var $el = $(ReactDOM.findDOMNode(todoItem));
    
    TestUtils.Simulate.click($el[0])
    expect(spy).toHaveBeenCalledWith(11);
  })
})