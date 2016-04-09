import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";


let PortfolioPage = React.createClass({
	render() {
		return (
			<div>
				<Portfolio />
				<Footer />
			</div>
		);
	}
});

module.exports = PortfolioPage;
