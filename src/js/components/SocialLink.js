import React from "react";

class SocialLink extends React.Component{
	render() {
		const connect = this.props.connect;

		return (
			<li className="contact-icons-item">
				<a href={connect.link}>
					<svg className={'icon ' + connect.icon}><use xlinkHref={'#'+connect.icon}></use></svg>
				<span className="sr-only">{'icon-'+connect.name}</span>
				</a>
			</li>
		);
	}
}

export default SocialLink;
