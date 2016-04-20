import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

let HomePage = React.createClass({
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
});

module.exports = HomePage;
