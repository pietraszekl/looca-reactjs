import React from "react";
import Skill from "./Skill";


class Skills extends React.Component{
	constructor(){
		super();
		this.state = {
			data: {}
		}
	}
	componentWillMount() {
		const appData = window.localStorage.getItem("appData");
		this.state.data = JSON.parse(appData);
	}
	render() {
		const skillsData = this.state.data.lukasz.skills;
		const SkillsList = skillsData.list.map((skill,i)=>	<Skill key={i} skill={skill}/>);
		return (
			<section className="section skills">
				<div className="container">
					<h2 className="section-heading">{skillsData.header}</h2>
				<div className="row">
						<p className="section-description">{skillsData.intro}</p>
					</div>
					<div className="row">
						<ul className="skills-list">
							{SkillsList}
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
