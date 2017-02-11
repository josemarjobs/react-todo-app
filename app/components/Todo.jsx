var React = require('react')

var Todo = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;
    return (
      <div className="todo" onClick={()=>this.props.onToggle(id)}>
        <input type="checkbox" checked={completed} ref="completed"/> {text}
      </div>
    )
  }
})

module.exports = Todo;