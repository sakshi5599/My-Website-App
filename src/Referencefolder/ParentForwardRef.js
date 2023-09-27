import React, { useRef } from "react";
import ChildForwardRef from "./ChildForwardRef";

function ParentForwardRef() {
  const InputRef = useRef(null);

  function UpdateInput() {
    InputRef.current.value = "1000";
    InputRef.current.style.color="blue";
    InputRef.current.style.backgroundColor="gray";
   
    
  }
  return (
    <div>
      <header className="App-header">
        <h1>The ForwardRef Component</h1>

        <ChildForwardRef ref={InputRef} />
        <button onClick={UpdateInput}>Input Update </button>
      </header>
    </div>
  );
}
export default ParentForwardRef;
