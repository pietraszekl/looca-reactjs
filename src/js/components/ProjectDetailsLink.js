import React from "react";

let ProjectDetailsLink = React.createClass({
	render() {
		const link = this.props.link;
		return (
				<a href={link.url} class="button">
					{link.text}
				</a>
		);
	}
});

module.exports = ProjectDetailsLink;
