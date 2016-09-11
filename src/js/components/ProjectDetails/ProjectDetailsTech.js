import React from "react";

class ProjectDetailsTech extends React.Component{
	render() {
		const tech = this.props.tech;
		return (
			<span>{tech} / </span>
		);
	}
}

export default ProjectDetailsTech;
