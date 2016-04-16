import React from "react";
import Skill from "./Skill";


let Skills= React.createClass({
	getInitialState() {
		return {
			data: {}
		}
	},
	componentWillMount() {
		const appData = window.localStorage.getItem("appData");
		this.state.data = JSON.parse(appData);
	},
	render() {
		const skillsData = this.state.data.lukasz.skills;
		const SkillsList = skillsData.list.map((skill,i)=>	<Skill key={i} skill={skill}/>);
		return (
			<section class="section skills">
				<div class="container">
					<h2 class="section-heading">{skillsData.header}</h2>
					<div class="row">
						<p class="section-description">{skillsData.intro}</p>
					</div>
					<div class="row">
						<ul class="skills-list">
							{SkillsList}
						</ul>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Skills;
