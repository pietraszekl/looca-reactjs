import React from "react";
import Project from "./Project";


let Portfolio = React.createClass({

	getInitialState() {
		return {
			projectsList: []
		}
	},
	componentDidMount: function() {
		let self = this;
		this.loadJSON('./data/looca.json', function(results) {
			let projects = results.projects;
			projects.forEach(function(project){
				self.add(project);
			});
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
	eachProject: function(project, i){
		return (
			<Project key={i} project={project}/>
		)
	},
	loadJSON(path, success, error){
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					if (success) {
						success(JSON.parse(xhr.responseText));
					}
				} else {
					if(error) {
						error(xhr);
					}
				}
			}
		};
		xhr.open("GET", path, true);
		xhr.send();
	},
	render() {
		const ProjectsList = this.state.projectsList.map((project,i)=>	<Project key={i} project={project}/>);

		return (
			<section id="projects" class="section projects">
				<div class="container">
					<h2 class="section-heading">Clients</h2>
					<p class="section-description">During my 5+ years of professional experience I have helped build websites and services for well-known companies.</p>
					<div class="row">
						{ProjectsList}
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Portfolio;
