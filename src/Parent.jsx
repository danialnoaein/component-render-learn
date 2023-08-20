import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  componentDidMount() {
    console.count("PARENT MOUNTED");
  }

  componentWillUnmount() {
    console.count("PARENT UNMOUNT");
  }

  render() {
    console.count("PARENT RENDERED");
    return (
      <div style={{ border: "1px solid red", margin: "8px" }}>
        <h1>PARENT</h1>
        <Child />
      </div>
    );
  }
}

export default Parent;
