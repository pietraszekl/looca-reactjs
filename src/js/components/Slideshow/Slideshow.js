'use strict';

import React from "react";
import SlideshowStore from "./SlideshowStore";
import Slides from "./Slides";
import Controls from "./Controls";
import Pagination from "./Pagination";

require('./slideshow.scss');

class Slideshow extends React.Component{
	constructor(props) {
		super();
		const slides = props.config.data;
		this.state = {
			data: SlideshowStore.getAll(slides),
			current: SlideshowStore.currentSlide
		}
	}
	componentWillMount(){
		SlideshowStore.on("change", ()=>{
			this.setState({
				current: SlideshowStore.currentSlide
			})
		})
	}

	render() {
		const slideshow = this.state;
		const slideshowConfig = this.props.config;
		const showControls = (typeof slideshowConfig.controls === "undefined") ? true : slideshowConfig.controls;
		const showPagination = (typeof slideshowConfig.pagination === "undefined") ? true : slideshowConfig.pagination;
		const autoRotateSpeed = (typeof slideshowConfig.autorotate === "undefined") ? false : slideshowConfig.autorotate;
		return (
			<div className="slideshow">
				<Slides data={slideshow.data} currentSlide={slideshow.current}/>
				<Controls isVisible={showControls} isAutoRotate={autoRotateSpeed}/>
				<Pagination isVisible={ showPagination} data={slideshow.data} currentSlide={slideshow.current}/>
			</div>
		);
	}
}

export default Slideshow;
