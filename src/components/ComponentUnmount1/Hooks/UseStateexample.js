import React, { useEffect } from 'react'
import { useState } from 'react'

function UseStateexample(){
    const [count,SetCount]=useState(0)

    useEffect(()=>{
        console.log("useeffect");
    }
    )
    return(

        <div>
            <header className='App-header'>
             <h1> Use UseState{count} </h1>
             <button onClick={()=>SetCount(count+1)}>Update Count</button>

            </header>
        </div>
    )
}

export default UseStateexample;