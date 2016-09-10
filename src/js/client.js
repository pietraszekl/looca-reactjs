import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, useRouterHistory} from "react-router";
import {createHashHistory} from 'history';
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import ProjectPage from "./pages/Project";
import HomePage from "./pages/Home";
import LayoutPage from "./pages/Layout";
import TestimonialsPage from "./pages/Testimonials";

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const app = document.getElementById("app");

ReactDOM.render(
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={LayoutPage}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="portfolio" name="portfolio" component={PortfolioPage}></Route>
      <Route path="portfolio/:project" name="project" component={ProjectPage}></Route>
      <Route path="contact" name="contact" component={ContactPage}></Route>
      <Route path="testimonials" name="testimonials" component={TestimonialsPage}></Route>
    </Route>
  </Router>,
  app);
