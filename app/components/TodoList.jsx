var React = require('react')

var Todo = require('Todo')

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderedTodos = todos.map((t) => {
      return <Todo onToggle={this.props.onToggle} {...t} key={t.id}/>
    })
    return (
      <div className="todo-list">
        {renderedTodos}
      </div>
    )
  }
})

module.exports = TodoList