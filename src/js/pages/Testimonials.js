import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


let TestimonialsPage = React.createClass({
	render() {
		return (
			<div>
				<Testimonials />
				<Footer />
			</div>
		);
	}
});

module.exports = TestimonialsPage;
