import React from "react";
import * as SlideshowActions from "./SlideshowActions";

class Controls extends React.Component{
  constructor(){
    super();
  }
  componentWillMount(){
    if(this.props.isAutoRotate){
      setInterval(function(){
        SlideshowActions.autoRotate()
      }, this.props.isAutoRotate);
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
