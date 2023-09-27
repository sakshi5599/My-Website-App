import React, { useEffect } from "react";

function UseEffectProps1(props) {
    //use multiple useeffect and called thid perticular effect updata data api whaever we want we called this useeffect
  useEffect(() => {
    alert("use Effect is called data"+ props.Data);
  },[props.Data]);//specifically define the useeffect [props.data]

  return (
    <div>
      <h1>UseEffectProps1</h1>

      <h3>count:{props.Count}</h3>
      <h3>Data :{props.Data}</h3>
    </div>
  );
}

export default UseEffectProps1;
