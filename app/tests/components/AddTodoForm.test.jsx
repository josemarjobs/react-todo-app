var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jQuery')

var AddTodoForm = require('AddTodoForm')

describe('AddTodoForm', () => {
  it('should exist', () => {
    expect(AddTodoForm).toExist()
  })

  describe('onFormSubmit', () => {
    it('adds a todo when valid text is entered', () => {
      var todoText = 'do something';
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));
      console.log($el)
      addTodoForm.refs.text.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0])
      expect(spy).toHaveBeenCalledWith(todoText);
    })

    it('does not add a todo when invalid text is entered', () => {
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));
      console.log($el)
      addTodoForm.refs.text.value = '   ';
      TestUtils.Simulate.submit($el.find('form')[0])
      expect(spy).toNotHaveBeenCalled()
    })

  })

})