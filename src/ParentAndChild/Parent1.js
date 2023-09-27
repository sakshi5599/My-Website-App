import React, { Fragment } from 'react'
import Child1 from './Child1';

const Parent1 = () => {

  function parentalert(data){
    alert(data)
  }

  return (

  
    <div>
<header className='App-header'>
       <h1>Lifting State Up</h1>
      <Child1 alert={parentalert}/>
     
       </header>

    </div>
  )
}

export default Parent1;