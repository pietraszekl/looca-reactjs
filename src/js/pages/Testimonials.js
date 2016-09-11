import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

class TestimonialsPage extends React.Component{
	render() {
		return (
			<div>
				<Testimonials />
				<Footer />
			</div>
		);
	}
}

export default TestimonialsPage;
