import React from "react";
import {Link} from "react-router";

let Navigation = React.createClass({
	render() {
		return (
			<section class="section navigation">
				<Link to="/">Home</Link>
				<Link to="contact">Contact</Link>
				<Link to="portfolio">Portfolio</Link>
				<Link to="testimonials">testimonials</Link>
			</section>
		);
	}
});

module.exports = Navigation;
