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
        todo: {
          id: '1234',
          text: 'Thing to do',
          completed: false,
          createdAt: 12343
        }
      }

      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toBe(1)
      expect(res[0]).toEqual(action.todo)
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
      var todos = [{
        id: '123', 
        text: 'Do something', 
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }

      var res = reducers.todosReducer(df(todos), df(action))

      expect(res[0].completed).toEqual(updates.completed)
      expect(res[0].completedAt).toEqual(updates.completedAt)
      expect(res[0].text).toEqual(todos[0].text)
    })

  })

})