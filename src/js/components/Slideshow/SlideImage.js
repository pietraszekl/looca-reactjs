import React from "react";

class SlideImage extends React.Component{
	render() {
		return (
			<div className={this.props.active ? "slide slide--active ": "" + "slide"}>
				<img className="u-max-full-width" src={this.props.image} alt={this.props.altText}/>
			</div>
		);
	}
}

export default SlideImage;
