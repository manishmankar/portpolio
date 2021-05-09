import React, { Component } from "react";
import "./IHaveBuild.css";
import IHaveBuildCompo from "./IHaveBuildCompo/IHaveBuildCompo";

export default class IHaveBuild extends Component {
  render() {
    return (
      <div id="work" className="ihavebuildConatiner">
        <div className="aboutHediing">
          <h1>Some Things I’ve Built</h1>
          <div className="sideLine"></div>
        </div>

        <IHaveBuildCompo />
        <IHaveBuildCompo />
        <IHaveBuildCompo />
      </div>
    );
  }
}
