import React from "react";

class Slide extends React.Component{
	render() {
		return (
			<div className={this.props.active ? "slide slide--active ": "" + "slide"}>
			<p className="slide__text">{this.props.text}</p>
			<p className="slide__caption">{this.props.caption}</p>
			</div>
		);
	}
}

export default Slide;
