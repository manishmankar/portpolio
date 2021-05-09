import React, { Component } from "react";
import "./Work.css";
import { CaretRightOutlined } from "@ant-design/icons";
const deatis = [
  {
    active: "All",
    id: 1,
    name: "Lively Work Pvt. Ltd.",
    detail: `Engineer at Lively Work Pvt. Ltd`,
    date: "OCT 2020",
    info: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
  },
  {
    active: "JavaScript",
    id: 2,
    name: "Jana Small Finace Bank",
    detail: "engineer at lively work",
    date: "July 2019 to June 2020",
    info: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    ],
  },
  {
    active: "CSS",
    id: 3,
    name: " xceller it ",
    detail: "engineer at lively work",
    date: "July",
    info: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
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
