import React from "react";
import LoadData from "../components/loadData";

require('../../styles/main.scss');


let LayoutPage = React.createClass({

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

module.exports = LayoutPage;
