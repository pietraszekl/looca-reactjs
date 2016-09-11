import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class ContactPage extends React.Component{
	render() {
		return (
			<div>
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default ContactPage;
