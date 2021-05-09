import React, { Component } from "react";
import About from "../Componets/About/About";
import Contact from "../Componets/Contact/Contact";
import Experience from "../Componets/Experience/Experience";
import IHaveBuild from "../Componets/IHaveBuild/IHaveBuild";
import PersonalInfo from "../Componets/PersonalInfo/PersonalInfo";
import Project from "../Componets/Project/Project";
import Work from "../Componets/Work/Work";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <PersonalInfo />
        <About />
        <Work />
        <IHaveBuild />
        <Project />
        <Contact />
      </div>
    );
  }
}
