import React from "react";
import Project from "./Project";


let Portfolio = React.createClass({

	getInitialState() {
		return {
			projectsData :{},
			projectsList: []
		}
	},
	componentWillMount() {
		let self = this;
		let appData = window.localStorage.getItem("appData");
		appData = JSON.parse(appData);
		this.state.projectsData = appData.projects;
		let projects = appData.projects.list;

		Object.keys(projects).forEach(function(project){
			let project_id = project;
			let item = appData.projects.list[project_id];
			self.add(item);
		});
	},
	add: function(project){
		let arr = this.state.projectsList;
		arr.push({
			project: project
		});
		this.setState({
			projectsList: arr
		})
	},

	render() {
		const projectsText = this.state.projectsData;
		const ProjectsList = this.state.projectsList.map((project,i)=>	<Project key={i} project={project}/>);

		return (
			<section id="projects" class="section projects">
				<div class="container">
					<h2 class="section-heading">{projectsText.title}</h2>
							 <p class="section-description">{projectsText.intro}</p>
					<div class="row">
						{ProjectsList}
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Portfolio;
