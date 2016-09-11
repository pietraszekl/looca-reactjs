import React from "react";

class Skill extends React.Component{
	render() {
		const skill = this.props.skill;

		return (
			<li className="skills-list-item">
				{skill}
			</li>
		);
	}
}

export default Skill;
