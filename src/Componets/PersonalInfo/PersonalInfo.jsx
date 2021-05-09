import React, { Component } from "react";
import "./PersonalInfo.css";
import { Button, Radio } from "antd";
import "antd/dist/antd.css";

export default class PersonalInfo extends Component {
  onClickHandle = () => {
    console.log("click");
  };
  render() {
    return (
      <div className="personalInfo">
        <h3>Hi, My Name is</h3>
        <h1>Manish Mankar.</h1>
        <h2>I build things for the web.</h2>
        <p>
          I'm a Indian-based software engineer who specializes in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I'm an engineer at lively Work on building accessible, human-centered
          products.
        </p>

        <div>
          <Button size="large">
            <a href="mailto:manishmankar07m@gmail.com" target="_blank">
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    );
  }
}
