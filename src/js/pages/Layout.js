import React from "react";
require('../../styles/main.scss');

class LayoutPage extends React.Component{
	constructor(){
		super();
		this.state = {
			isLoading: true
		}
	}
	init(){
		const days = 7; // Reset when storage is more than 7 days
		const timeNow = new Date().getTime();
		const setupTime = localStorage.getItem('loocaSetupTime');
		const url = './data/looca.json';
		if (setupTime == null) {
			localStorage.setItem('loocaSetupTime', timeNow);
			this.setData(url);
		} else {
			if(timeNow - setupTime > days*24*60*60*1000) {
				localStorage.removeItem('loocaSetupTime');
				localStorage.setItem('loocaSetupTime', timeNow);
				this.setData(url);
			} else {
				this.setState({isLoading:false});
			}
		}
	}
	componentWillMount(){
		this.init();
	}
	setData(url){
		let self = this;
		self.loadJSON(url, function(results) {
			window.localStorage.setItem("appData", JSON.stringify(results));
			self.setState({isLoading:false});
		});
	}
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
	}
	render() {
		let PageContent = "Loading...";
		if(this.state.isLoading === false){
			PageContent =	this.props.children;
		}
		return (
			<div>
				{PageContent}
			</div>
		);
	}
}

export default LayoutPage;
