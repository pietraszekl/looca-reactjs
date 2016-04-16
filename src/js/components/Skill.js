import React from "react";


let Skill = React.createClass({
	render() {
		const skill = this.props.skill;

		return (
			<li class="skills-list-item">
				{skill}
			</li>
		);
	}
});

module.exports = Skill;
