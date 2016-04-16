import React from "react";
import {Link} from "react-router";
import SocialLink from "./SocialLink";

const Hero = React.createClass({
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
		const person = this.state.data.lukasz;
		const ConnectList = person.connect.map((connect,i)=>	<SocialLink key={i} connect={connect}/>);
		return (
			<section class="section hero">
				<div class="container">
					<div class="row">
						<div class="hero-profile-img">
							<img class="side-front" src={person.photo} alt={person.name} />
						</div>
						<h2 class="hero-sub-heading">{person.title}</h2>
						<hr class="u-hero-divider" />
						<h1 class="hero-heading">{person.name}</h1>
						<ul class="contact-icons twelve columns">
							{ConnectList}
						</ul>
						<p class="section-description">{person.about}</p>

						<p class="section-description">{person.specialities}</p>
						<Link to={person.cv.btnLink} class="button" target="blank">{person.cv.btnTxt}</Link>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Hero;
