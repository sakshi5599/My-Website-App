import React,{useRef} from "react";

//use funtioanal component

function Ref2() {
  let InputRef = useRef(null);

  function handleinput() {
    console.log("function call");
    // InputRef.current.value="99999"
    InputRef.current.focus();
    InputRef.current.style.color="red"

  }

  return (
    <div>
      <header className="App-header">
        <h1>Using UseRef</h1>
        <input type="text" ref={InputRef} />
        <button onClick={handleinput}>Check REf</button>
      </header>
    </div>
  );
}
export default Ref2;
