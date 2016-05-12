import React from "react";

let ProjectDetailsTech = React.createClass({
	render() {
		const tech = this.props.tech;
		return (
			<span>{tech} / </span>
		);
	}
});

module.exports = ProjectDetailsTech;
