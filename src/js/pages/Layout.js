import React from "react";


require('../../styles/main.scss');


let LayoutPage = React.createClass({

	getInitialState: function(){
		return {
			response: "waiting"
		}
	},
	init: function() {
		let self = this;
		this.loadJSON('./data/looca.json', function(results) {
			window.localStorage.setItem("appData", JSON.stringify(results));
			self.setState({'response':'ready'});
		});
	},
	componentWillMount: function(){
		this.init();
	},
	loadJSON(path, success, error){
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					if (success) {
						success(JSON.parse(xhr.responseText));
					}
				} else {
					if(error) {
						error(xhr);
					}
				}
			}
		};
		xhr.open("GET", path, true);
		xhr.send();
	},
	render() {
		let PageContent = "Loading...";
		if(this.state.response == "ready"){
			PageContent =	this.props.children;
		}
		return (
			<div>
				{PageContent}
			</div>
		);
	}
});

module.exports = LayoutPage;
