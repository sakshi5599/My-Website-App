import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";

function Form() {
  const [data, setdata] = useState(null);
  const [print, setdata1] = useState(false);

  function getdata(val) {
    console.log(val.target.value);
    setdata(val.target.value);
    setdata1(false);
  }
  return (
    <div>
      <header className="App-header">
        <h1>Get Input Values !</h1>
        {print ? <h2>{data}</h2> : null}

        <input type="text" onChange={getdata} style={{width:"50%"}}/>
        <button onClick={() => setdata1(true)}>Print Value</button>
      </header>
    </div>
  );
}



export default Form;
