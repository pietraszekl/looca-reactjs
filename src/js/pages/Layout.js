import React from "react";
import Navigation from "../components/Navigation";

let LayoutPage = React.createClass({

	render() {
		return (
			<div>
				<Navigation />
				{this.props.children}
			</div>
		);
	}
});

module.exports = LayoutPage;
