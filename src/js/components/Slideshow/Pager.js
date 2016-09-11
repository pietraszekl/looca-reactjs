import React from "react";
import * as SlideshowActions from "./SlideshowActions";

class Pager extends React.Component{
  toggleSlide() {
    SlideshowActions.toggleSlide(this.props.id);
  }
  render() {
    return (
      <span className={this.props.active ? "pagination__item pagination__item--active ": "" + "pagination__item"} onClick={this.toggleSlide.bind(this)}>{this.props.id}</span>
    );
  }
}

export default Pager;
