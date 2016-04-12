import React from "react";
import Title from "./Header/Title";
let Hero = React.createClass({

	render() {
		let appData =window.localStorage.getItem("appData");
		appData = JSON.parse(appData);
		const person = appData.lukasz;
		return (
			<section class="section hero">
				<div class="container">
					<div class="row">
						<div class="hero-profile-img">
							<img class="side-front" src="images/looca-side-a.png" alt="Lukasz Pietraszek" />
							<img class="side-back" src="images/looca-side-b.png" alt="Lukasz Pietraszek Logo" />
						</div>
						<h2 class="hero-sub-heading">{person.title}</h2>
						<hr class="u-hero-divider" />
						<h1 class="hero-heading">{person.name}</h1>
						<ul class="contact-icons twelve columns">
							<li class="contact-icons-item">
								<a href="//twitter.com/pietraszekl">
									<svg class="icon icon-twitter"><use xlinkHref="#icon-twitter"></use></svg>
									<span class="sr-only"> icon-twitter</span>
								</a>
							</li>
							<li class="contact-icons-item">
								<a href="//uk.linkedin.com/in/pietraszekl">
									<svg class="icon icon-linkedin"><use xlinkHref="#icon-linkedin"></use></svg>
									<span class="sr-only"> icon-linkedin</span>
								</a>
							</li>
							<li class="contact-icons-item">
								<a href="//github.com/Looca">
									<svg class="icon icon-github"><use xlinkHref="#icon-github"></use></svg>
									<span class="sr-only"> icon-github</span>
								</a>
							</li>
							<li class="contact-icons-item">
								<a href="//plus.google.com/109768437210413970058">
									<svg class="icon icon-github"><use xlinkHref="#icon-google-plus"></use></svg>
									<span class="sr-only"> icon-google-plus</span>
								</a>
							</li>
						</ul>
						<p class="section-description">Freelance UI/Front-end developer with proven track-record over five years in creating clean, accessible and user-friendly responsive websites. Self motivated and adaptable, independent minded, with a keen eye for detail. Experienced in working with Agile methodologies.</p>

						<p class="section-description">Specialities: HTML5, CSS3, Web Design/Development, RWD, Usability, Web Standards, Axure RP</p>
						<a class="button" href="/documents/Lukasz_Pietraszek_CV.docx" target="blank">Download my CV</a>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Hero;
