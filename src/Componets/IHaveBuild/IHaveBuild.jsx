import React, { Component } from "react";
import "./IHaveBuild.css";
import IHaveBuildCompo from "./IHaveBuildCompo/IHaveBuildCompo";
import capture from "../../image/Capture1.PNG";
import capture2 from "../../image/Capture2.PNG";
import capture3 from "../../image/Capture3.PNG";

const liveproject = [
  {
    id: 1,
    img: capture,
    href: "https://edcrat.com",
    title: "Learning app",
    details:
      "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through yourtop repos by number of stars, forks, and size.",
    techology: ["CSS", "HTML", "javaScript", "React JS"],
    classname: "ihavebuildCompo",
    classname2: "ihavebuildright",
    classname3: "technology",
  },
  {
    id: 2,
    img: capture2,
    href: "https://school-web-site.herokuapp.com",
    title: "School Info Site ",
    details:
      "A web app for showing School information details and we can view the school gallary and admission processes and the all course details ",
    techology: ["CSS", "HTML", "javaScript", "React JS"],
    classname: "ihavebuildCompoChange",
    classname2: "ihavebuildrightChange",
    classname3: "technologyChange",
  },
  {
    id: 3,
    img: capture3,
    href: "https://create-to-do.herokuapp.com/",
    title: "ToDo App",
    details:
      "It is simple TODO list where we can add and remove the items and mark as complited. The complited item shifited to last of the list  ",
    techology: ["CSS", "HTML", "javaScript", "React JS"],
    classname: "ihavebuildCompo",
    classname2: "ihavebuildright",
    classname3: "technology",
  },
];

export default class IHaveBuild extends Component {
  render() {
    return (
      <div id="work" className="ihavebuildConatiner">
        <div className="aboutHediing">
          <h1>Some Things I’ve Built</h1>
          <div className="sideLine"></div>
        </div>

        {liveproject.map((data) => {
          return <IHaveBuildCompo data={data} />;
        })}
      </div>
    );
  }
}
