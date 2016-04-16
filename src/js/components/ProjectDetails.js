import React from "react";
import {Link} from "react-router";


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

		return (
			<h2>Project details: {project_data.name}</h2>
		);
	}
});

module.exports = ProjectDetails;
