import React from "react";
import {Link} from "react-router";


let Project = React.createClass({
	render() {
		const {project} = this.props.project;
		return (

			<Link to={'/portfolio/' + project.id} className="four columns img-grayscale-color project-thumbnail">
				<img class="u-max-full-width" src={"/images/logos/"+project.logo} alt={project.name}/>
				<div className="view-more">View more</div>
			</Link>
		);
	}
});

module.exports = Project;
