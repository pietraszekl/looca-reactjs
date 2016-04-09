import React from "react";
import Footer from "../components/Footer";


let ProjectPage = React.createClass({
	render() {
		const {params} = this.props;
		return (
			<div>
				<h1>Project name: {params.project}</h1>
				<Footer />
			</div>
		);
	}
});

module.exports = ProjectPage;
