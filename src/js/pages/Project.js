import React from "react";
import Footer from "../components/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"

class ProjectPage extends React.Component{
	render() {
		const {params} = this.props;
		return (
			<div>
				<ProjectDetails project={params.project}/>
				<Footer />
			</div>
		);
	}
}

export default ProjectPage;
