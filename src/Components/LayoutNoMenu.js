import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/logo_hlavni.png";

export default class LayoutNoMenu extends Component {
  render() {
    return (
      <div className="layoutPage">
        <div className="zbytekCast">{this.props.children}</div>
        <img style={logoHlavni} src={logo} alt="asdf" />
      </div>
    );
  }
}
const logoHlavni = {
  position: "absolute",
  display: "block",
  bottom: 0,
  right: 0,
  width: "21vw",
  padding: "20px"
};
