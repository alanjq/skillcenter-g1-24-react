import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name} React + Parcel.</h1>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="World!" />, mountNode);
