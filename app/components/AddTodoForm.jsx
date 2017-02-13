var React = require('react')
var {connect} = require('react-redux')
var actions = require('actions')

export var AddTodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    
    var text = this.refs.text.value;
    if(text.trim().length === 0) {
      this.refs.text.focus();
      return;
    }
    this.refs.text.value = '';
    dispatch(actions.addTodo(text));
  },

  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What do you need to do?" ref="text"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
})

export default connect()(AddTodoForm)