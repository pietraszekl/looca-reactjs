import React from "react";
import Footer from "../components/Footer";
import ProjectDetails from "../components/ProjectDetails"

let ProjectPage = React.createClass({
	render() {
		const {params} = this.props;
		return (
			<div>
				<ProjectDetails project={params.project}/>
				<Footer />
			</div>
		);
	}
});

module.exports = ProjectPage;
