import React from "react";
import Slideshow from "./Slideshow/Slideshow";

let Testimonials = React.createClass({
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

		return (
			<section class="section testimonials">
				<div class="container">
					<h2 class="section-heading">Testimonials</h2>

					<div class="row testimonials-list">
						<Slideshow data={this.state.data.testimonials}/>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Testimonials;
