import React from "react";

let Footer = React.createClass({
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
		const footerData = this.state.data.footnote;
		return (
			<footer class="footer">
				<div class="container">
					<small>{footerData}</small>
				</div>
			</footer>
		);
	}
});

module.exports = Footer;
