import React from "react";
import {Link} from "react-router";


let ProjectNavigation = React.createClass({
	render() {
		return (
			<header class="project-header">
				<div class="container">
					<span class="navigation-header-title">Projects</span>
					<Link to="/" class="navigation-button-back">
						<svg class="icon icon-close"><use  xlinkHref="#icon-close"></use></svg>
							<span class="sr-only">icon close</span>
						</Link>
				</div>
			</header>
		);
	}
});

module.exports = ProjectNavigation;
