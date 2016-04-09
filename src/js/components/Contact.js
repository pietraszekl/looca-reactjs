import React from "react";

let Contact = React.createClass({
	render() {
		const hiddenEl = {
			display: 'none'
		}
		return (
			<section class="section contact">
				<div class="container">
					<h2 class="section-heading">Get in touch</h2>
					<div class="row">
						<form id="contact-form" class="contact-form" action="#" method="POST">
							<div class="row">
								<div class="six columns">
									<label for="emailInput">Your email</label>
									<input class="u-full-width" type="email" name="_email" placeholder="test@mailbox.com" id="emailInput" />
								</div>
								<div class="six columns">
									<label for="recipientInput">Reason for contacting</label>
									<input class="u-full-width" type="text" name="reason" placeholder="Job offer" id="recipientInput" />
								</div>
							</div>
							<label for="message">Message</label>
							<textarea class="u-full-width" placeholder="Hi Lukasz …" id="message" name="message" rows="6"></textarea>
							<input type="text" name="_gotcha" style={hiddenEl} />
							<input class="button" type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Contact;
