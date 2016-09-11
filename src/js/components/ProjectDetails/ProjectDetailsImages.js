import React from "react";

class ProjectDetailsImages extends React.Component{
	render() {
		const image = this.props.image;
		return (
			<div>
				<img className="u-max-full-width" src={image.src} alt={image.altText}/>
				</div>

			);
		}
	}

export default ProjectDetailsImages;
