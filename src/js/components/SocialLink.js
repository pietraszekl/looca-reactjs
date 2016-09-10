import React from "react";

class SocialLink extends React.Component{
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
}

export default SocialLink;
