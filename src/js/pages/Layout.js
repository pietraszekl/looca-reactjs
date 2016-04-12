import React from "react";
import Navigation from "../components/Navigation";
import LoadData from "../components/loadData";

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
