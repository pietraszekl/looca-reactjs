import React from "react";
import * as SlideshowActions from "./SlideshowActions";

class Controls extends React.Component{
  componentDidMount(){
    if(this.props.isAutoRotate){
      this.interval = setInterval(function(){
        SlideshowActions.autoRotate();
      }, this.props.isAutoRotate);
      this.interval;
    }
  }
  componentWillUnmount () {
    // Make sure to reset invterval otherwise it results in error
    if(this.props.isAutoRotate){
      clearInterval(this.interval);
    }
  }
  slidePrev() {
    SlideshowActions.prevSlide()
  }
  slideNext() {
    SlideshowActions.nextSlide()
  }
  render() {
    let Controls = '';
    if(this.props.isVisible){
      Controls = <div className="slideshow__nav">
        <div className="slides-nav slides-nav--prev" onClick={this.slidePrev.bind(this)}></div>
        <div className="slides-nav slides-nav--next" onClick={this.slideNext.bind(this)}></div>
      </div>
    }
    return (
      <div>
        {Controls}
      </div>
    );
  }
}

export default Controls;
