import React from "react";


let Testimonial = React.createClass({
	render() {
		const testimonial = this.props.testimonial;

		return (
			<blockquote>
				<p>{testimonial.text}</p>
				<footer>— {testimonial.name}, <cite>{testimonial.role}</cite></footer>
			</blockquote>
		);
	}
});

module.exports = Testimonial;
