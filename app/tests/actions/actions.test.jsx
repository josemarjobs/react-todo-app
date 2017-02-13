var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  
  it('generates search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText)
    
    expect(res).toEqual(action)
  })

  it('generates add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Some todo'
    }
    
    var res = actions.addTodo(action.text)
    
    expect(res).toEqual(action)
  })

  it('generates addTodos action', () => {
    var action = {
      type: 'ADD_TODOS',
      todos: [{
        id: 1, 
        text: 'Todo 1',
        completed: false,
        completedAt: undefined,
        createdAt: 3000
      }]
    }
    
    var res = actions.addTodos(action.todos)
    
    expect(res).toEqual(action)
  })

  it('generates toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    
    var res = actions.toggleShowCompleted()
    
    expect(res).toEqual(action)
  })

  it('generates toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    }
    
    var res = actions.toggleTodo(action.id)
    
    expect(res).toEqual(action)
  })
})
