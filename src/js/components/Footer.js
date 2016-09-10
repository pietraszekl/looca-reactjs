import React from "react";

class Footer extends React.Component{
	constructor() {
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
		const footerData = this.state.data.footnote;
		return (
			<footer class="footer">
				<div class="container">
					<small>{footerData}</small>
				</div>
			</footer>
		);
	}
}

export default Footer;
