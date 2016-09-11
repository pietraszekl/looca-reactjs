import React from "react";
import Project from "./Project";


class Portfolio extends React.Component{
	constructor(){
    super();
		this.state = {
			projectsData :{},
			projectsList: []
		}
  }
	componentWillMount() {
		const self = this;
		let appData = window.localStorage.getItem("appData");
		appData = JSON.parse(appData);
		this.state.projectsData = appData.projects;
		let projects = appData.projects.list;

		Object.keys(projects).forEach(function(project){
			let project_id = project;
			let item = appData.projects.list[project_id];
			self.add(item);
		});
	}
	add(project){
		const arr = this.state.projectsList;
		arr.push({
			project: project
		});
		this.setState({
			projectsList: arr
		})
	}

	render() {
		const projectsText = this.state.projectsData;
		const ProjectsList = this.state.projectsList.map((project,i)=>	<Project key={i} project={project}/>);

		return (
			<section id="projects" className="section projects">
				<div className="container">
					<h2 className="section-heading">{projectsText.title}</h2>
				<p className="section-description">{projectsText.intro}</p>
			<div className="row">
						{ProjectsList}
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
