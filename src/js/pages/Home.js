import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class HomePage extends React.Component{
	render() {
		return (
			<div>
				<Hero />
				<Skills />
				<Portfolio />
				<Testimonials />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default HomePage;
