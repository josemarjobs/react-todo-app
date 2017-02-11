var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jQuery')

var TodoSearch = require('TodoSearch')

describe('TodoSearch', () => {
  it('exists', () => {
    expect(TodoSearch).toExist();
  })

  it('calls onSearch with entered input text', () => {
    var searchText = 'do';
    var spy = expect.createSpy();
    var searchForm = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
    searchForm.refs.searchText.value = searchText;
    TestUtils.Simulate.change(searchForm.refs.searchText)
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('calls onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var searchForm = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
    searchForm.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(searchForm.refs.showCompleted)
    expect(spy).toHaveBeenCalledWith(true, '');      
  })
})
