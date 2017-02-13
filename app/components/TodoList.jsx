var React = require('react')
var {connect} = require('react-redux')

import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return <p className="container__message">Nothing to Do</p>;
      }
      return todos.map((t) => {
        return <Todo  {...t} key={t.id}/>
      })
    }
    
    return (
      <div className="todo-list">
        {renderTodos()}
      </div>
    )
  }
})

export default connect((state)=> {
  return {
    todos: state.todos
  }
})(TodoList)
