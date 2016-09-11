import React from "react";

class ProjectDetailsLink extends React.Component{
	render() {
		const link = this.props.link;
		return (
				<a href={link.url} className="button u-pull-right">
					{link.text}
				</a>
		);
	}
}

export default ProjectDetailsLink;
