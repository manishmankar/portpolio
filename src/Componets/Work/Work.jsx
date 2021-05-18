import React, { Component } from "react";
import "./Work.css";
import { CaretRightOutlined } from "@ant-design/icons";
const deatis = [
  {
    active: "All",
    id: 1,
    name: "LivelyWork.",
    detail: `Engineer @ Lively Work Pvt. Ltd`,
    date: "OCT 2020 - Present",
    info: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React, Craft, MaterialUI, AntDesign",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    active: "HTML",
    id: 2,
    name: "Slogfy",
    detail: `Inter @ Slogfy Pvt. Ltd`,
    date: "SEP 2020",
    info: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      ,
    ],
  },
  {
    active: "JavaScript",
    id: 3,
    name: "JanaSmall Finace Bank",
    detail: "Techincal Support Engineer",
    date: "July 2019 to June 2020",
    info: [
      "Provide technical support; answering support queries either onsite or via phone or email",
      "Maintain a log of any software or hardware problems detected",
      "Respond to enquiries from clients and help them resolve any hardware or software problems",
      "Support users in the use of Computer equipment by providing necessary training and advice",
    ],
  },
  {
    active: "CSS",
    id: 4,
    name: " Xceller It ",
    detail: "Tranee Engineer @ Xceller",
    date: "JAN 2018 - JUNE 2018 ",
    info: [
      "Maintain a high degree of customer service for all support queries and adhere to all service management principles",
      "Maintained standard software configurations, including troubleshooting, loading and configuring software images, supported applications and drivers",

      "To manage the Applications of computer system",
    ],
  },
];
export default class Work extends Component {
  state = {
    in: [
      {
        active: false,
        id: 1,
        name: "Engineer at Lively Work Pvt. Ltd",
        detail: "Engineer at Lively Work",
        date: "OCT 2020",
        info: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
          "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
        ],
      },
    ],
    selected: 1,
  };

  onChangeHandler = (e) => {
    console.log(e);
    const m = deatis.filter((data) => {
      if (e === data.id) {
        return data, (data.active = true);
      } else if (e === data.id) {
        return data, (data.active = true);
      } else if (e === data.id) {
        return data, (data.active = true);
      }
    });

    this.setState({ in: m });

    this.setState(function () {
      return {
        selected: e,
      };
    });
  };

  render() {
    return (
      <div id="experience" className="work">
        <div className="workContainer">
          <div className="workHedding">
            <h1>Where I've worked</h1>
            <div className="sideLine"></div>
          </div>

          <div className="mainContainer">
            <div className="companyname">
              {deatis.map((data, index) => {
                return (
                  <div
                    className="eachCompany"
                    key={index}
                    onClick={() => this.onChangeHandler(data.id)}
                  >
                    <div
                      className={
                        data.id === this.state.selected
                          ? "companyLine"
                          : "inActiveLine"
                      }
                    ></div>
                    <div
                      className={
                        data.id === this.state.selected ? "active" : "inActive"
                      }
                    >
                      {data.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="details">
              <div className="comanyDetails">{this.state.in[0].detail}</div>
              <div className="date">{this.state.in[0].date}</div>
              <div>
                {this.state.in[0].info.map((data) => {
                  return (
                    <div className="description">
                      <div className="arrows">
                        <CaretRightOutlined />
                      </div>
                      <div> {data}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
