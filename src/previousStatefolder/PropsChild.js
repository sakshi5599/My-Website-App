import React,{useEffect,useRef} from "react";

function PropsChild(props) {
   const lastval=useRef();
   useEffect(()=>{
    lastval.current=props.count;
   })

  const previousvalue= lastval.current
  return (
    <div>
      <h1>cureeent value:{props.count}</h1>
      <h2>previsous value:{previousvalue}</h2>

    </div>
  );
}
export default PropsChild;
