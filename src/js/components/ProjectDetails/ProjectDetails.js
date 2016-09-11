import React from "react";
import ProjectNavigation from "./ProjectNavigation";

import ProjectDetailsLink from "./ProjectDetailsLink";
import ProjectDetailsTech from "./ProjectDetailsTech";
import ProjectDetailsImages from "./ProjectDetailsImages";
import Slideshow from "../Slideshow/Slideshow";

class ProjectDetails extends React.Component{
	constructor() {
		super();
		this.state = {
			data: {}
		}
	}
	componentWillMount() {
		const project_id = this.props.project;
		const appData = window.localStorage.getItem("appData");
		this.state.data = JSON.parse(appData);
		this.slideshowConfig.data = this.state.data.projects.list[project_id].img;
	}

	slideshowConfig = {
		data: [],
		slideshowType: 'image',
		pagination: true,
		controls: true,
		autorotate : 5000
	}

	render() {
		const project_id = this.props.project;
		const project_data = this.state.data.projects.list[project_id];

		const ProjectLinksList = project_data.links.map((link,i)=>	<ProjectDetailsLink key={i} link={link}/>);

		const ProjectTechList = project_data.tech.map((tech,i)=>	<ProjectDetailsTech key={i} tech={tech}/>);

		const ProjectImages = project_data.img.map((image,i)=>	<ProjectDetailsImages key={i} image={image}/>);

		return (
			<div>
			<ProjectNavigation />
		<section className="section project">
				<div className="container">
					<h1 className="section-heading">{project_data.name}</h1>
				<p className="section-description">{project_data.desc}</p>
			<div className="row">
						<div className="eight columns">
							<div className="project-release">
								<span className="project-release-label">Year: </span>
							<span className="project-release-date">{project_data.year}
								</span>
							</div>
							<div>
								<span className="list-heading">Tech stack: </span>
								{ProjectTechList}
							</div>
						</div>
						<div className="four columns">
							{ProjectLinksList}
						</div>
					</div>
					<div className="row">
						<Slideshow config={this.slideshowConfig}/>
			 		</div>
				</div>
			</section>
			</div>
		);
	}
}
export default ProjectDetails;
