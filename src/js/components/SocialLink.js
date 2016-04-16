import React from "react";

let SocialLink = React.createClass({
	render() {
		const connect = this.props.connect;

		return (
			<li class="contact-icons-item">
				<a href={connect.link}>
					<svg class={'icon ' + connect.icon}><use xlinkHref={'#'+connect.icon}></use></svg>
					<span class="sr-only">{'icon-'+connect.name}</span>
				</a>
			</li>
		);
	}
});

module.exports = SocialLink;
