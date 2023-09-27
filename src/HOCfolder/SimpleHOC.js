import React, { useState } from "react";

function SimpleHOC() {
  return (
    <header className="App-header">
      <h1>HOC(Higher Order Compoenent) simple example</h1>
      <HOCRed cmp={Counter} />
    <HOCGreen cmp={Counter}/>
    <HOCBlue cmp={Counter}/>
    </header>
  );
  // create hoc funtion
  function HOCRed(props) {
    return (
      <h2 style={{ backgroundColor: "red", textAlign: "center" }}>
        count 1<props.cmp />
      </h2>
    );
  }
  function HOCGreen(props) {
    return (
      <h2 style={{ backgroundColor: "Green", textAlign: "center" }}>
        count 2<props.cmp />
      </h2>
    );
  }
  function HOCBlue(props) {
    return (
      <h2 style={{ backgroundColor: "Blue", textAlign: "center" }}>
        count 3<props.cmp />
      </h2>
    );
  }

  function Counter() {
    const [count, Setcount] = useState(0);
    return (
      <div>
        <h1>Count:{count}</h1>

        <button style={{color:"white" ,backgroundColor:"black"}}  onClick={() => Setcount(count + 1)}>Update Counter</button>
      </div>
    );
  }
}
export default SimpleHOC;
