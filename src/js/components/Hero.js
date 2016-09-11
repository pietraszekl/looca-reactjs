import React from "react";
import SocialLink from "./SocialLink";

class Hero extends React.Component{
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
		const person = this.state.data.lukasz;
		const ConnectList = person.connect.map((connect,i)=>	<SocialLink key={i} connect={connect}/>);
		return (
			<section className="section hero">
				<div className="container">
					<div className="row">
						<div className="hero-profile-img">
							<img className="side-front" src={person.photo} alt={person.name} />
						</div>
						<h2 className="hero-sub-heading">{person.title}</h2>
					<hr className="u-hero-divider" />
				<h1 className="hero-heading">{person.name}</h1>
			<ul className="contact-icons twelve columns">
							{ConnectList}
						</ul>
						<p className="section-description">{person.about}</p>
					<p className="section-description">{person.specialities}</p>
				<a href={person.cv.btnLink} className="button" target="blank">{person.cv.btnTxt}</a>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
