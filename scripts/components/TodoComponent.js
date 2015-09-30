var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<li>{this.props.task.get('description')}</li>
		)
	}
})
