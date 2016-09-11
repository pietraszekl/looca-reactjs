import React from "react";

class Contact extends React.Component{
	render() {
		const hiddenEl = {
			display: 'none'
		}
		return (
			<section className="section contact">
				<div className="container">
					<h2 className="section-heading">Get in touch</h2>
				<div className="row">
						<form id="contact-form" className="contact-form" action="https://formspree.io/info@looca.co.uk" method="POST">
							<div className="row">
								<div className="six columns">
									<label htmlFor="emailInput">Your email</label>
								<input className="u-full-width" type="email" name="_email" placeholder="test@mailbox.com" id="emailInput" />
								</div>
								<div className="six columns">
									<label htmlFor="recipientInput">Reason for contacting</label>
								<input className="u-full-width" type="text" name="reason" placeholder="Job offer" id="recipientInput" />
								</div>
							</div>
							<label htmlFor="message">Message</label>
						<textarea className="u-full-width" placeholder="Hi Lukasz …" id="message" name="message" rows="6"></textarea>
							<input type="text" name="_gotcha" style={hiddenEl} />
						<input className="button" type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
