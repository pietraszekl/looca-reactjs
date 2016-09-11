import React from "react";
import {Link} from "react-router";


class ProjectNavigation extends React.Component{
	render() {
		return (
			<header className="project-header">
				<div className="container">
					<span className="navigation-header-title">Projects</span>
				<Link to="/" className="navigation-button-back">
						<svg className="icon icon-close"><use  xlinkHref="#icon-close"></use></svg>
					<span className="sr-only">icon close</span>
						</Link>
				</div>
			</header>
		);
	}
}

export default ProjectNavigation;
