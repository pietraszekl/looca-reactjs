'use strict';

import React from "react";

let ProjectDetailsLink = React.createClass({
	render() {
		const link = this.props.link;
		return (
				<a href={link.url} class="button u-pull-right">
					{link.text}
				</a>
		);
	}
});

module.exports = ProjectDetailsLink;
