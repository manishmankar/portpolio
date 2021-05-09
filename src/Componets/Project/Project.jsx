import Card from "../Card/Card";
import React, { Component } from "react";
import "./Project.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default class Project extends Component {
  state = {
    active: false,
  };
  callback = (key) => {
    this.setState({ active: !this.state.active });
    console.log(this.state.active);
    console.log("click");
    console.log(key);
  };
  render() {
    return (
      <div className="project">
        <div className="CardBox">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Collapse onChange={this.callback} defaultActiveKey={["1"]}>
            <Panel header={this.state.active ? "Show Less" : " Show More"}>
              <Card />
              <Card />
              <Card />
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}
