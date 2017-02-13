var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jQuery')

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('exists', () => {
    expect(TodoSearch).toExist();
  })

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchText = 'Dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText 
    }
    var spy = expect.createSpy();
    var searchForm = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
    searchForm.refs.searchText.value = searchText;
    TestUtils.Simulate.change(searchForm.refs.searchText)

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox clicked', () => {
    var spy = expect.createSpy();
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var searchForm = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
    searchForm.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(searchForm.refs.showCompleted)
    expect(spy).toHaveBeenCalledWith(action);      
  })
})

