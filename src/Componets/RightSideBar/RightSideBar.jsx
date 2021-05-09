import React, { Component } from "react";
import "./RightSideBar.css";

export default class extends Component {
  render() {
    return (
      <div className="rightSideBar">
        <div>
          <div className="address">
            <a href="mailto:manishmankar07m@gmail.com" target="_blank">
              manishmankar07m@gmail.com
            </a>
          </div>
          <div className="rightSideline"></div>
        </div>
      </div>
    );
  }
}
