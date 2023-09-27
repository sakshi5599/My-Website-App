import React, { useRef } from "react";

function Uncontrolledexample() {
  //define ref
  let InputRef = useRef(null);
  let InputRef1 = useRef(null);


  function submitform(e) {
    e.preventDefault();
    console.log("input field value 1", InputRef.current.value);
    console.log("input field value 2", InputRef1.current.value);
    let input2=document.getElementById('Input2').value 
    console.log("input field vlue 3",input2);
  }
  return (
    <div>
      <header className="App-header">
        <h1>Uncontrolledexample components</h1>
        <form onSubmit={submitform}>
          <input type="text" ref={InputRef} />
          <br />
          <br />
          <input type="text" ref={InputRef1} />
          <br />
          <br />
          <input type="text" id="Input2" />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}
export default Uncontrolledexample;
