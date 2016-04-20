import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import ProjectPage from "./pages/Project";
import HomePage from "./pages/Home";
import LayoutPage from "./pages/Layout";
import TestimonialsPage from "./pages/Testimonials";


const app = document.getElementById("app");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={LayoutPage}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="portfolio" name="portfolio" component={PortfolioPage}></Route>
      <Route path="portfolio/:project" name="project" component={ProjectPage}></Route>
      <Route path="contact" name="contact" component={ContactPage}></Route>
      <Route path="testimonials" name="testimonials" component={TestimonialsPage}></Route>
    </Route>
  </Router>,
  app);
