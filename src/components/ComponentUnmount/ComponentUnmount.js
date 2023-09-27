import React from "react";
import PropTypes from "prop-types";
import styles from "./ComponentUnmount.module.css";
import ComponentUnmount1 from "../ComponentUnmount1/ComponentUnmount1";

class ComponentUnmount extends React.Component {
  //create state
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        <header className="App-header">
          {/* <h1>Component Unmount Method</h1> */}
          {
            this.state.show?<ComponentUnmount1 />:<h1>Component is removed</h1>
          
          }
          <button onClick={() => this.setState({ show: !this.state.show })}>
            Toggle
          </button>
        </header>
      </div>
    );
  }
}

export default ComponentUnmount;
