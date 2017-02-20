var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jQuery')

import * as actions from 'actions';
import {AddTodoForm} from 'AddTodoForm';

describe('AddTodoForm', () => {
  it('should exist', () => {
    expect(AddTodoForm).toExist()
  })

  describe('onFormSubmit', () => {
    it('should dispatch ADD_TODO when valid text is entered', () => {
      var todoText = 'do something';
      var action = actions.startAddTodo(todoText);

      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(
        <AddTodoForm dispatch={spy} />
      );
      var $el = $(ReactDOM.findDOMNode(addTodoForm));
      addTodoForm.refs.text.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toHaveBeenCalledWith(action);
    })

    it('should not dispatch ADD_TODO when invalid text is entered', () => {
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));
      addTodoForm.refs.text.value = '   ';
      TestUtils.Simulate.submit($el.find('form')[0])
      expect(spy).toNotHaveBeenCalled()
    })

  })

})
