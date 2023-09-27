import React, { useState } from "react";
import { Button } from "react-bootstrap";
function Controlledexample() {

    //controlled component is access throuth the react js state only
    //so use state through get input value

    const [val,setval]=useState("");
    function updatevalue(){
      return val;
    }
  return (
    <div>
      <header className="App-header">
        
        <h1>Controlled Compoenent</h1>
        <input type="text" value={val} onChange={(event)=>setval(event.target.value)} />
        <Button onClick={updatevalue}></Button>
        <h1>{val}</h1>

        
      </header>
    </div>
  );
}
export default Controlledexample;
