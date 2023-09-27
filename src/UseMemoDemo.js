import React, { useMemo, useState } from "react";

function UseMemoDemo() {
  //using state
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(1);

  // function multicount(){
  //     console.log("multifounet");
  //     return count*10;
  // }

  //use memo do not other other compeont call when u r calling already one componennt

  //use this
  const multicountMemo = useMemo(
    function Multicount() {
      console.log("call multicount");
      return count * 10;
    },
    [count]
  );
  return (
    <>
      <header className="App-header">
        <h1>Use Memo Demo Example Component</h1>
        <h1>count:{count}</h1>
        <h1>item:{item}</h1>
        <h1>{multicountMemo}</h1>
        <button onClick={() => setcount(count + 1)}>Update Count</button>
        <button onClick={() => setitem(item * 5)}>Update Item</button>
      </header>
    </>
  );
}
export default UseMemoDemo;
