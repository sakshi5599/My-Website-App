import React, { Fragment } from 'react'
import { alignPropType } from 'react-bootstrap/esm/types';

const Child1  = (props) => {
//send child to parent data exammple below
const data="Om namh shivaay";
  
  return (
    <Fragment>
 
 <h1>Send Data Child to parent</h1>

<button onClick={()=>props.alert(data)} >Click Me</button>
     
    </Fragment>
  )
}

export default Child1; 