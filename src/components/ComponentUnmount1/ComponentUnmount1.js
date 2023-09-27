import React from "react";
import PropTypes from "prop-types";
import styles from "./ComponentUnmount1.module.css";

class ComponentUnmount1 extends React.Component {

  componentWillUnmount(){
    alert("component is removed ......")
  }
  render() {
    return (
      <div>
        <h1>ComponentUnmount1</h1>
      </div>
    );
  }
}

export default ComponentUnmount1;
