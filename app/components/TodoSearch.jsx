var React = require('react')
var {connect} = require('react-redux')
var actions = require('actions')

export var TodoSearch = React.createClass({
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props

    return (
      <div className="container__header">
        <div>
          <input 
            type="text" 
            value={searchText}
            onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText))
            }} 
            ref="searchText" 
            placeholder="Search todos"/>
        </div>
        <div>
          <label>
            <input 
              checked={showCompleted}
              type="checkbox" 
              ref="showCompleted" 
              onChange={()=>{
                dispatch(actions.toggleShowCompleted())
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
})

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch)