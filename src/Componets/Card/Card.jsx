import React, { Component } from "react";
import { FolderOutlined, FormOutlined } from "@ant-design/icons";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="cardHeader">
          <div className="cardIcon">
            <FolderOutlined />
          </div>
          <div className="icon">
            <FormOutlined />
          </div>
        </div>
        <div className="cardContain">
          <h3>Integrating Algolia Search with WordPress Multisite</h3>
          <p>
            Building a custom multisite compatible WordPress plugin to build
            global search with Algolia
          </p>
        </div>
        <div className="cardFooter">
          <div>Algolia</div>
          <div>WordPress</div>
          <div>css</div>
        </div>
      </div>
    );
  }
}
