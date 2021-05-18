import React, { Component } from "react";
import "./About.css";
import pic from "../../image/manish.jpg";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="about">
        <div className="aboutHediing">
          <h1>About Me</h1>
          <div className="sideLine"></div>
        </div>

        <div className="aboutContainer">
          <div className="contactLeft">
            <p>
              Hello! My name is Manish and I enjoy creating things that live on
              the internet. My interest in web development started back in 2020
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an
              web development agency, a start-up, and a student-led design
              studio. My main focus these days is building accessible, inclusive
              products and digital experiences at livelywork for a variety of
              clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="skill">
              <div>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (ES6+)</li>
              </div>

              <div>
                <li>React</li>
                <li>Boootstrap</li>
                <li>Redux</li>
              </div>
            </div>
          </div>
          <div className="contactRight">
            <div className="image">
              <img src={pic} alt="" />
            </div>
            <div className="boader"></div>
          </div>
        </div>
      </div>
    );
  }
}
