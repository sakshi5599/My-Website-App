import React, { useEffect, useState } from "react";

function UseEffectExam2() {
  const [data, setdata] = useState(3);
  const [Count, setCount] = useState(5);

  useEffect(() => {
    console.log("useEffect  data called");
  },[data]);
  useEffect(() => {
    console.log("useEffect  count called");
  },[Count]);
  return (
    <div>
      <header className="App-header">
        <h2>Count state :{Count}</h2>
        <button onClick={() => setCount(Count + 3)}>Update Count</button>
        <h2>Data :{data}</h2>
        <button onClick={() => setdata(data + 5)}>Update Data</button>
      </header>
    </div>
  );
}

export default UseEffectExam2;
