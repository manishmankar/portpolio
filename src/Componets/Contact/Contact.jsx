import React, { Component } from "react";
import "./Contact.css";
import { Button, Radio } from "antd";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact">
        <div className="contactContainer">
          <h3>What’s Next?</h3>
          <h1>Get In Touch</h1>
          <p>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <Button size="large">Say Hello</Button>
        </div>
      </div>
    );
  }
}
