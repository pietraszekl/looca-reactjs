import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer";


class PortfolioPage extends React.Component{
	render() {
		return (
			<div>
				<Portfolio />
				<Footer />
			</div>
		);
	}
}

export default PortfolioPage;
