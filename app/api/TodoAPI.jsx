var $ = require('jQuery');
const TODOS_KEY = 'todos';
module.exports = {
  setTodos: function(todos) {
    if (!$.isArray(todos)) {
      return;
    }
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    return todos;
  },
  getTodos: function() {
    var todos = []
    try {
      todos = JSON.parse(localStorage.getItem(TODOS_KEY))
    } catch (e) {
    }
    return $.isArray(todos) ? todos : []
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;
    // filter by show completed
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed ||  showCompleted;
    })

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return todo.text.toLowerCase().indexOf(searchText) > -1;
    })

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      }
      if(a.completed && !b.completed) {
        return 1;
      }
      return 0;
    })
    return filteredTodos;
  }
}
