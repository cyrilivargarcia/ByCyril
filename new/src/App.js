import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Fade } from "reactstrap";

import "./App.css";
import MyNav from "./comp/MyNav";
import Home from "./comp/Home";
import About from "./comp/About";
import Connect from "./comp/Connect";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: true
    };
  }

  toggle = () => {
    this.setState({ fadeIn: !this.state.fadeIn });
  };

  render() {
    return (
      <div>
        <MyNav />
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          <Route exact path="/" component={Home} />
        </Fade>
        <Fade in={this.state.fadeIn} tag="h6" className="mt-3">
          <Route exact path="/about" component={About} />
        </Fade>
        <Fade in={this.state.fadeIn} tag="h6" className="mt-3">
          <Route exact path="/connect" component={Connect} />
        </Fade>
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

{
  /* <NavLink exact to="/projects">
                  Projects
                </NavLink> */
}
