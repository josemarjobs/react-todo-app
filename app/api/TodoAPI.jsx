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
  }
}