import React, { Component } from "react";
import "./Navbar.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button, Space } from "antd";
import logo from "../../image/logo.jpg";
import resume from "../../image/resume.pdf";

export default class Navbar extends Component {
  state = {
    click: false,
  };

  clickHandle = () => {
    this.setState({ click: !this.state.click }, () => {
      console.log(this.state.click);
    });
  };
  render() {
    return (
      <div className="navBar">
        <div className="navBarContainer">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navItem">
            <div className="item">
              <a href="#about">
                <span>01.</span> About
              </a>
            </div>
            <div className="item">
              <a href="#experience">
                <span>02.</span>Experience
              </a>
            </div>

            <div className="item">
              <a href="#work">
                <span>03.</span> Work
              </a>
            </div>
            <div className="item">
              <a href="#contact">
                <span>04.</span>Contact
              </a>
            </div>
            <div className="item">
              <Button size="small">
                <a href={resume} target="_blank">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="navForMobile">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div onClick={this.clickHandle} className="hambargarIcon">
            {this.state.click ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>
        {this.state.click ? (
          <div className="sideWrapper">
            <Menu
              className="sideWrapperMenu"
              onClick={this.handleClick}
              defaultSelectedKeys={["1"]}
              // defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <Menu.Item>
                <div onClick={() => (window.location.href = "#about")}>
                  About
                </div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={() => (window.location.href = "#experience")}>
                  Experience
                </div>
              </Menu.Item>

              <Menu.Item>
                <div onClick={() => (window.location.href = "#work")}>Work</div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={() => (window.location.href = "#contact")}>
                  Contact
                </div>
              </Menu.Item>
              <Menu.Item>
                <Button size="small">
                  <a href={resume} target="_blank">
                    Resume
                  </a>
                </Button>
              </Menu.Item>
            </Menu>
          </div>
        ) : null}
      </div>
    );
  }
}
