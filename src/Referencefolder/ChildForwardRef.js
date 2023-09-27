import React,{forwardRef} from "react";

function ChildForwardRef(props,ref) {
  return (
      <div>
      <h1>The ChildForwardRef Compoenent:</h1>
      <input type="text" ref={ref} />
      </div>
  );
}
export default forwardRef(ChildForwardRef);


