import React from "react";
import Slide from "./Slide";
import SlideshowStore from "./SlideshowStore";

class Slides extends React.Component{
	constructor(props) {
		super();
		this.currentSlide = props.currentSlide;
		this.data = props.data;
		this.state={
			currentSlide: this.currentSlide,
		}
	}
	componentWillMount(){
		SlideshowStore.on("change", ()=>{
			this.setState({
				currentSlide: SlideshowStore.currentSlide
			})
		})
	}
	render() {
		var self = this;
		var SlidesList = this.data.map(function (slide, i) {
			var isActive = self.state.currentSlide === i;
			return (
				<Slide active={isActive} key={slide.id} text={slide.text} caption={slide.caption}/>
			);
		});
		return (
			<div className="slideshow__slides">
				{SlidesList}
			</div>
		);
	}
}

export default Slides;
