'use strict';

import React from "react";

let ProjectDetailsImages = React.createClass({
	render() {
		const image = this.props.image;
		return (
			<div>
				<img class="u-max-full-width" src={image.src} alt={image.altText}/>
				</div>

			);
		}
	});

	module.exports = ProjectDetailsImages;
