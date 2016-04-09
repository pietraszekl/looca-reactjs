import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

let ContactPage = React.createClass({
	render() {
		return (
			<div>
				<Contact />
				<Footer />
			</div>
		);
	}
});

module.exports = ContactPage;
