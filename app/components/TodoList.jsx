var React = require('react')

var Todo = require('Todo')

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return <p className="container__message">Nothing to Do</p>;
      }
      return todos.map((t) => {
        return <Todo onToggle={this.props.onToggle} {...t} key={t.id}/>
      })
    }
    
    return (
      <div className="todo-list">
        {renderTodos()}
      </div>
    )
  }
})

module.exports = TodoList