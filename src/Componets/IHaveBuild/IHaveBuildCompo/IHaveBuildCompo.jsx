import React, { Component } from "react";
import "./IHaveBuildCompo.css";

export default class IHaveBuildCompo extends Component {
  render() {
    return (
      <div className={this.props.data.classname}>
        <div className="ihavebuildleft  ">
          <a href={this.props.data.href} target="_blank">
            <img src={this.props.data.img} alt="" />
          </a>
        </div>
        <a className="atag" href={this.props.data.href} target="_blank">
          <div className={this.props.data.classname2}>
            <h3>Featured Project </h3>
            <h1>{this.props.data.title}</h1>
            <p>{this.props.data.details}</p>
            <div className={this.props.data.classname3}>
              {this.props.data.techology.map((le) => {
                return <div className="eachTechnology">{le}</div>;
              })}
            </div>
          </div>
        </a>
      </div>
    );
  }
}
