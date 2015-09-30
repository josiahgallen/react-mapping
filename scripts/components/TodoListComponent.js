var React = require('react');
var TodoComponent = require('./TodoComponent');

module.exports = React.createClass({
	render: function() {
		var todoRow = this.props.todos.map(function(task) {
			return (
				<TodoComponent task={task} />
			)
		});
		return (
			<div className="row">
				<h1>Todos</h1>
				<ul>{todoRow}</ul>
			</div>
		);
	}
});