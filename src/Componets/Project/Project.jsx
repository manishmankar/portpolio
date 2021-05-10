import Card from "../Card/Card";
import React, { Component } from "react";
import "./Project.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

const prodata = [
  {
    id: 1,
    title: "E-Commerce",
    des:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "https://github.com/manishmankar/E-Commerce",
  },
  {
    id: 2,
    title: "DashBoard",
    des:
      "It show the different parament of API value and User login Dashboard ",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "https://github.com/manishmankar/Dashboard-",
  },
  {
    id: 3,
    title: "MERN-Stack-Student-Details",
    des: "A single page web app , built with Express JS ,MongDB and  Node Js",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "",
  },
  {
    id: 4,
    title: "Notes",
    des:
      "Online version of my 2019 resume made for fun. I was interested in learning React.js, so I found a simple tutorial and it spun into a weekend project.",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "https://github.com/manishmankar/Notes",
  },
  {
    id: 5,
    title: "Analog-Clock",
    des: " Build the Anoalog clock with help of CSS, HTML and JavaScript ",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "https://github.com/manishmankar/Analog-Clock",
  },
  {
    id: 6,
    title: "NOOK",
    des:
      "Simple website to display some of my favorite CSS Style combined with some fun lorem ipsum variations found on the web.",
    tech: ["CSS", "HTML"],
    git: "https://github.com/manishmankar/first-business-website",
  },
];

const exprodata = [
  {
    id: 1,
    title: "Quiz-App",
    des:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "https://github.com/manishmankar/Quiz-App",
  },
  {
    id: 2,
    title: "Drag-Drop",
    des:
      "It show the different parament of API value and User login Dashboard ",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "https://github.com/manishmankar/Drag-Drop",
  },
  {
    id: 3,
    title: "SchoolWebSite",
    des: "A single page web app , built with Express JS ,MongDB and  Node Js",
    tech: ["CSS", "HTML", "JavaSript"],
    git: "https://github.com/manishmankar/SchoolWebSite",
  },
];

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
        <h1>Other Noteworthy Projects</h1>
        <div className="CardBox">
          {prodata.map((data, index) => {
            return <Card data={data} />;
          })}

          <Collapse onChange={this.callback} defaultActiveKey={["1"]}>
            <Panel header={this.state.active ? "Show Less" : " Show More"}>
              {exprodata.map((data) => {
                return <Card data={data} />;
              })}
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}
