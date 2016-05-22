import React from "react";
import Slideshow from "./Slideshow/Slideshow";

class Testimonials extends React.Component{
	constructor(props) {
		super();
		this.state = {
			data: {}
		}
	}
	slideshowConfig = {
		data: [],
		pagination: true,
		controls: true,
		autorotate : 5000
	}
	componentWillMount() {
		const appData = window.localStorage.getItem("appData");
		this.state.data = JSON.parse(appData);
		this.slideshowConfig.data = this.state.data.testimonials;
	}
	render() {
		return (
			<section class="section testimonials">
				<div class="container">
					<h2 class="section-heading">Testimonials</h2>
					<div class="row testimonials-list">
						<Slideshow config={this.slideshowConfig}/>
					</div>
				</div>
			</section>
		);
	}
}

export default Testimonials;
