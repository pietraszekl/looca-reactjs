import React from "react";
import {Link} from "react-router";


let Project = React.createClass({
	render() {
		const {project} = this.props.project;
		return (

			<Link to={'/portfolio/' + project.id} class="four columns img-grayscale-color">
				<img class="u-max-full-width" src={project.thumb} alt={project.name}/>
			</Link>

		);
	}
});

module.exports = Project;
