import React from "react";
require("../../styles/main.scss");
import firebase from "../firebase";

class LayoutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  getData() {
    const itemsRef = firebase.database().ref();
    let self = this;
    itemsRef.on("value", snapshot => {
      let results = snapshot.val();
      window.localStorage.setItem("appData", JSON.stringify(results));
      self.setState({ isLoading: false });
    });
  }
  componentWillMount() {
    this.getData();
  }

  render() {
    let PageContent = "Loading...";
    if (this.state.isLoading === false) {
      PageContent = this.props.children;
    }
    return (
      <div>
        {PageContent}
      </div>
    );
  }
}

export default LayoutPage;
