import React, { useState } from "react";
import PropsChild from "./PropsChild";

function PropsParent() {
  const [count, Setcount] = useState(0);

  return (
    <div>
      <PropsChild count={count} />
      <button onClick={() => Setcount(Math.floor(Math.random()*10))}> Update Counter</button>
    </div>
  );
}
export default PropsParent;
