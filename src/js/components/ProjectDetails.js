import React from "react";
import {Link} from "react-router";
import ProjectNavigation from "./ProjectNavigation";

import ProjectDetailsLink from "./ProjectDetailsLink";
import ProjectDetailsTech from "./ProjectDetailsTech";
import ProjectDetailsImages from "./ProjectDetailsImages";

let ProjectDetails = React.createClass({
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
		const project_id = this.props.project;
		const project_data = this.state.data.projects.list[project_id];

		const ProjectLinksList = project_data.links.map((link,i)=>	<ProjectDetailsLink key={i} link={link}/>);

		const ProjectTechList = project_data.tech.map((tech,i)=>	<ProjectDetailsTech key={i} tech={tech}/>);

		const ProjectImages = project_data.img.map((image,i)=>	<ProjectDetailsImages key={i} image={image}/>);



		return (
			<div>
			<ProjectNavigation />
			<section class="section project">
				<div class="container">
					<h1 class="section-heading">{project_data.name}</h1>
					<p class="section-description">{project_data.desc}</p>
					<div class="row">
						<div class="eight columns">
							<div class="project-release">
								<span class="project-release-label">Year: </span>
								<span class="project-release-date">{project_data.year}
								</span>
							</div>
							<div>
								<span class="list-heading">Tech stack: </span>
								{ProjectTechList}
							</div>
						</div>
						<div class="four columns">
							{ProjectLinksList}
						</div>
					</div>
					<div class="row">
					 <div class="columns">
							 <div class="slider slider-for">
								 {ProjectImages}
							 </div>
					 </div>
			 </div>
				</div>
			</section>
			</div>
		);
	}
});

module.exports = ProjectDetails;
