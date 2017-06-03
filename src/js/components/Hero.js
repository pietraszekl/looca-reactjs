import React from "react";
import SocialLink from "./SocialLink";
import firebase from "../firebase";
class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      cv: {},
      connect: []
    };
  }

  // componentWillMount() {
  //   const appData = window.localStorage.getItem("appData");
  //   this.state.data = JSON.parse(appData);
  // }
  componentDidMount() {


    const itemsRef = firebase.database().ref('lukasz');


    itemsRef.on("value", (snapshot) => {
      let person = snapshot.val();
      let connect = person.connect
      let newState = [];
      for (let item in connect) {
        newState.push({
          icon: connect[item].icon,
          link: connect[item].link,
          name: connect[item].name
        });
      }

      this.setState({
        person: person,
        connect: newState,
        cv: person.cv
      });
    });
  }

  render() {
    const person = this.state.person;
    const cv = this.state.cv;
    const ConnectList = this.state.connect.map((connect, i) => (
      <SocialLink key={i} connect={connect} />
    ));
    return (
      <section className="section hero">
        <div className="container">
          <div className="row">
            <div className="hero-profile-img">
              <img
                className="side-front"
                src={person.photo}
                alt={person.name}
              />
            </div>
            <h2 className="hero-sub-heading">{person.title}</h2>
            <hr className="u-hero-divider" />
            <h1 className="hero-heading">{person.name}</h1>
            <ul className="contact-icons twelve columns">
              {ConnectList}
            </ul>
            <p className="section-description">{person.about}</p>
            <p className="section-description">{person.specialities}</p>
            <a href={cv.btnLink} className="button" target="blank">
              {cv.btnTxt}
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
