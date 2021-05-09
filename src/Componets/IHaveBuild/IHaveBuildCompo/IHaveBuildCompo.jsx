import React, { Component } from "react";
import "./IHaveBuildCompo.css";

export default class IHaveBuildCompo extends Component {
  render() {
    return (
      <div className="ihavebuildCompo">
        <div className="ihavebuildleft">
          <img
            src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
            alt=""
          />
        </div>
        <div className="ihavebuildright">
          <h3>Featured Project </h3>
          <h1>OctoProfile</h1>
          <p>
            A nicer look at your GitHub profile and repository stats with data
            visualizations of your top languages and stars. Sort through your
            top repos by number of stars, forks, and size.
          </p>
          <div className="technology">
            <div>Next.js</div>
            <div>Chart.js</div>
            <div> GitHub API</div>
          </div>
        </div>
      </div>
    );
  }
}
