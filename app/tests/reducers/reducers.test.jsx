var expect = require('expect')
var df = require('deep-freeze-strict')

var reducers = require('reducers')

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('sets searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      }

      var res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('toggle show copmleted state', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      var res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toBe(true)
    })
  })

  describe('todosReducer', () => {
    it('adds a todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Thing to do'
      }

      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toBe(1)
      expect(res[0].text).toEqual(action.text)
    })
    
    it('bulk adds an array of todo', () => {
      var action = {
        type: 'ADD_TODOS',
        todos: [{
          id: 11, 
          text: 'Todo 11',
          completed: false,
          completedAt: undefined,
          createdAt: 3000
        }]
      }

      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toBe(1)
      expect(res[0]).toEqual(action.todos[0])
    })

    it('toggles a todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      }
      var todos = [{
        id: '123', 
        text: 'Do something', 
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]

      var res = reducers.todosReducer(df(todos), df(action))

      expect(res[0].completed).toEqual(false)
      expect(res[0].completedAt).toNotExist()
    })

  })

})