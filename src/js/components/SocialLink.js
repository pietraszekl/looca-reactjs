import React from "react";
import {Link} from "react-router";


let SocialLink = React.createClass({
	render() {
		const connect = this.props.connect;

		return (
			<li class="contact-icons-item">
			<Link to={connect.link}>
					<svg class="icon icon-twitter"><use xlinkHref={'#'+connect.icon}></use></svg>
					<span class="sr-only">{'icon-'+connect.name}</span>
			</Link>
</li>
		);
	}
});

module.exports = SocialLink;
