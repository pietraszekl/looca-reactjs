import React from "react";
require('../../styles/main.scss');

let LayoutPage = React.createClass({
	getInitialState(){
		return {
			response: "waiting"
		}
	},
	init(){
		const days = 30; // Reset when storage is more than 31 days
		const timeNow = new Date().getTime();
		const setupTime = localStorage.getItem('loocaSetupTime');
		if (setupTime == null) {
			localStorage.setItem('loocaSetupTime', timeNow);
			this.setData();
		} else {
			if(timeNow - setupTime > days*24*60*60*1000) {
				localStorage.removeItem('loocaSetupTime');
				localStorage.setItem('loocaSetupTime', timeNow);
				this.setData();
			} else {
				this.setState({'response':'ready'});
			}
		}
	},
	componentWillMount(){
		this.init();
	},
	setData(){
		let self = this;
		self.loadJSON('./data/looca.json', function(results) {
			window.localStorage.setItem("appData", JSON.stringify(results));
			self.setState({'response':'ready'});
		});
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
