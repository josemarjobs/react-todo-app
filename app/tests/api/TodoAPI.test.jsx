var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('setTodos', () => {
    
    it('sets valid todos array', () => {
      var todos = [{id: 1, text: 'do something', completed: false}]
      TodoAPI.setTodos(todos);
      
      var actualTodos = JSON.parse(localStorage.getItem('todos'))
      expect(actualTodos).toEqual(todos);
    })

    it('does not set invalid todos', () => {
      var invalidTodos = {a: 'b'};
      TodoAPI.setTodos(invalidTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    })

  })

  describe('getTodos', () => {
    it('returns an empty array for invalid saved data', () => {
      expect(TodoAPI.getTodos('todos')).toEqual([])
    })

    it('returns an array with saved todos', () => {
      var todos = [{id: 1, text: 'do something', completed: true}]
      localStorage.setItem('todos', JSON.stringify(todos))
      
      var actualTodos = TodoAPI.getTodos()
      expect(actualTodos).toEqual(todos);
    })
  })
})