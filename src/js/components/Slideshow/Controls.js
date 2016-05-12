import React from "react";
import * as SlideshowActions from "./SlideshowActions";

class Controls extends React.Component{
  constructor(){
    super();
  }
  slidePrev() {
    SlideshowActions.prevSlide()
  }
  slideNext() {
    SlideshowActions.nextSlide()
  }
  render() {
    return (
      <div className="slideshow__nav">
        <div className="slides-nav slides-nav--prev" onClick={this.slidePrev.bind(this)}></div>
        <div className="slides-nav slides-nav--next" onClick={this.slideNext.bind(this)}></div>
      </div>
    );
  }
}

export default Controls;
