import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child extends Component {
  componentDidMount() {
    console.count("CHILD MOUNTED");
  }

  componentWillUnmount() {
    console.count("CHILD UNMOUNT");
  }

  render() {
    console.count("CHILD RENDERED");
    return (
      <div style={{ border: "1px solid red", margin: "8px" }}>
        <h1>Child</h1>
        <GrandChild />
      </div>
    );
  }
}

export default Child;
