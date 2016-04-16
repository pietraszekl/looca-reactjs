import React from "react";
import Testimonial from "./Testimonial"

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

		const TestimonialsList = this.state.data.testimonials.map((testimonial,i)=>	<Testimonial key={i} testimonial={testimonial}/>);

		return (
			<section class="section testimonials">
				<div class="container">
					<h2 class="section-heading">Testimonials</h2>

					<div class="row testimonials-list">
						{TestimonialsList}
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Testimonials;
