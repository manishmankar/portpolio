import React, { Component } from "react";
import "./Sidebar.css";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default class Sidebar extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="sidebar">
        <div className="profileIcon">
          <div className="icons">
            <a href="https://www.google.com" target="_blank">
              <InstagramOutlined />
            </a>
          </div>
          <div className="icons">
            <a href="https://github.com/manishmankar" target="_blank">
              <GithubOutlined />
            </a>
          </div>

          <div className="icons">
            <a
              href="https://www.linkedin.com/in/manish-mankar-0186ab16b"
              target="_blank"
            >
              <LinkedinOutlined />
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}
