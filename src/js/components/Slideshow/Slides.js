import React from "react";
import Slide from "./Slide";
import SlideImage from "./SlideImage";
import * as SlideshowActions from "./SlideshowActions";
import SlideshowStore from "./SlideshowStore";

class Slides extends React.Component{
	constructor(props) {
		super();
		this.currentSlide = props.currentSlide;
		this.data = props.data;
		this.slideType = props.slideType;
		this.state = {
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
		const self = this;
		console.log(self.props.slideshowType);
		const SlidesList = this.data.map(function (slide, i) {
			const isActive = self.state.currentSlide === i;
	 switch (self.props.slideshowType) {
		 case "image":
		 return (
			 <SlideImage active={isActive} key={slide.id} image={slide.src} altText={slide.altText}/>
		 );
		 default:
		 return (
			 <Slide active={isActive} key={slide.id} text={slide.text} caption={slide.caption}/>
		 );
	 }

		});
		return (
			<div className="slideshow__slides">
				{SlidesList}
			</div>
		);
	}
}

export default Slides;
