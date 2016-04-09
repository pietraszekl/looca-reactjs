import React from "react";

let Testimonials = React.createClass({
	render() {
		return (
			<section class="section testimonials">
				<div class="container">
					<h2 class="section-heading">Testimonials</h2>

					<div class="row testimonials-list">
						<blockquote><p>Lukasz is a great addition to our UI team at Portaltech Reply. He is a 'go-to' person when you need a quick and complete solution. Technical and with a keen eye for detail, Lukasz also has the rare quality of genuine self drive which has displayed itself whilst being UI project lead for one of our largest global clients.</p>
						<footer>— Simon Davies, <cite>Lead UI at Portaltech Reply</cite></footer>
					</blockquote>
					<blockquote><p>I had the pleasure working with lukasz and I have absolutely no hesitation to recommend him to anyone. He is a professional, dedicated and hard working individual who keeps himself up to date with the latest technologies and skills.
						He is a nice guy and I would love to work with him again in the future.</p>
					<footer>— Ali Khan, <cite>User Interface Engineer at Tesco PLC</cite></footer>
				</blockquote>
				<blockquote><p>Lukasz has a very good knowledge of CSS3 and HTML5. He is really up to date to the new technics and to new frontiers of web developing. His puts his experience and his skills in his job providing opinions even on the UX side. He is a great worker and while we have worked together I haven’t had to assign him few jobs ‘cause he was able to understand what was needed from him by the company. He is always punctual and he has a great respect of the work that is doing.</p>
				<footer>— Fabio Salimbeni, <cite>Web Developer at Kaplan International Colleges</cite></footer>
			</blockquote>
		</div>
	</div>
</section>
);
}
});

module.exports = Testimonials;
