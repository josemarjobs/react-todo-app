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
      
      expect(TodoAPI.getTodos()).toEqual(todos);
    })
  })

  describe('filterTodos', () => {
    var todos = [
      {id: 1, text:'Some text', completed: true},
      {id: 2, text:'Other text here', completed: false},
      {id: 3, text:'Some other text', completed: true},
    ];

    it('returns all items when showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3)
    })

    it('returns only the incompleted items when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1)
    })

    it('show incompleted todos first', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].id).toBe(2)
      expect(filteredTodos[0].completed).toBeFalsy()
    })

    it('filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2)
    })

    it('returns all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3)
    })

  })
})