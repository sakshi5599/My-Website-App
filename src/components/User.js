import React from 'react'
import User1 from './User1';

const User = (props) => {
    function getchilddata(){
        alert("Hello user1 Componet")
    }
  return (
    <div>
        User is a Child Component Create  and  App.js is Parent this example
        <p>User Component</p>
        <button onClick={()=>props.data()} btn-btn-primary>Clik Me </button>
        <User1 Data={getchilddata}/>
        </div>
  )
}

export default User;