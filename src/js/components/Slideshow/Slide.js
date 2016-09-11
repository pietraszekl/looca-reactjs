import React from "react";

class Slide extends React.Component{
	render() {
		return (
			<div className={this.props.active ? "slide slide--active ": "" + "slide"}>
				<p>{this.props.text}</p>
				<p>{this.props.caption}</p>
			</div>
		);
	}
}

export default Slide;
