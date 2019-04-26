import React, { Component } from "react";

import "./Main.css";
import "../App.css";

class Bio extends Component {
  render() {
    return (
      <div>
        <div className="App App-header">
          <h1 className="display-1" style={{ paddingTop: "125px" }}>
            Bio
          </h1>
          <p
            style={{
              fontSize: "25px",
              backgroundColor: "white",
              borderRadius: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
              width: "70%"
            }}
            className="container"
          >
            An experienced <code>iOS Software Engineer</code> with some
            experience in <code>web development</code> and <code>AI</code>.
            Currently a <code>Statistics</code> major at{" "}
            <code>San Jose State University</code>.
          </p>

          <p
            style={{
              fontSize: "25px",
              backgroundColor: "white",
              borderRadius: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
              width: "70%"
            }}
            className="container"
          >
            I plan to take my degreen to pursue a career in{" "}
            <code>Software Engineering</code> that specializes in{" "}
            <code>applied Artificial Intelligence</code> in{" "}
            <code>Mobile devices</code>.
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
