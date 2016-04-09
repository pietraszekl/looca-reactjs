import React from "react";

let Skills= React.createClass({
	render() {
		return (
			<section class="section skills">
				<div class="container">
					<h2 class="section-heading">Skills</h2>
					<div class="row">
						<p class="section-description">I hand-code all of my HTML, CSS and Javascript due to the strong belief that robust solutions depend upon a deep understanding of all the front-end code. This discipline also enables efficient fixing of bugs when they arise.</p>
					</div>
					<div class="row">
						<ul class="skills-list">
							<li class="skills-list-item">HTML5 & CSS3</li>
							<li class="skills-list-item">JavaScript</li>
							<li class="skills-list-item">jQuery</li>
							<li class="skills-list-item">Git & SVN</li>
							<li class="skills-list-item">SVN</li>
							<li class="skills-list-item">SASS & LESS</li>
							<li class="skills-list-item">Agile/Scrum experience</li>
							<li class="skills-list-item">Responsive/mobile-first sites</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Skills;
