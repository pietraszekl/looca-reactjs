'use strict';

import React from "react";
import Pager from "./Pager";
import SlideshowStore from "./SlideshowStore";

class Pagination extends React.Component{
  constructor(props){
    super();
    this.currentSlide = props.currentSlide
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
    var PaginationList = [];
    if(this.props.isVisible){
      var self = this;
      PaginationList = this.data.map(function (pager, i) {
        var isActive = self.state.currentSlide === i;
        return (
          <Pager active={isActive} id={pager.id} key={pager.id} />
        );
      });
    }
    return (
      <div className="pagination">
        {PaginationList}
      </div>
    );
  }
}

export default Pagination;
