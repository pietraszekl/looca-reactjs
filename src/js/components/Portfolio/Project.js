import React from "react";
import {Link} from "react-router";


class Project extends React.Component{
	render() {
		const {project} = this.props.project;
		return (
			<Link to={'/portfolio/' + project.id} className="four columns img-grayscale-color project-thumbnail">
				<img className="u-max-full-width" src={"/images/logos/"+project.logo} alt={project.name}/>
				<div className="view-more">More details</div>
			</Link>
		);
	}
}

export default Project;
