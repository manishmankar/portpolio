import React, { Component } from "react";
import { FolderOutlined, FormOutlined } from "@ant-design/icons";
import "./Card.css";

export default class Card extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div key={this.props.data.id} className="card">
        <div className="cardHeader">
          <div className="cardIcon">
            <FolderOutlined />
          </div>
          <div className="icon">
            <a href={this.props.data.git} target="_blank">
              <FormOutlined />
            </a>
          </div>
        </div>
        <div className="cardContain">
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.des}</p>
        </div>
        <div className="cardFooter">
          {this.props.data.tech.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>
      </div>
    );
  }
}
