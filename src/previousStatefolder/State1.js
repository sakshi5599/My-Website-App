import React, { useState } from "react";
import { alignPropType } from "react-bootstrap/esm/types";

function State1(){

    //define state
    const [count ,Setcount]=useState(0)
     function Updatevalue(){
      //  Setcount(count+1)
    //  let ran=Math.floor (Math.random()*10)
    //  Setcount((pre)=>{
    //     console.log(pre);
    //     if(pre<5){
    //         alert("low value enter")
    //     }
    //     return ran;
    //  })

     
     //using for loop also
     for(let i=0;i<5;i++)
     {
        Setcount((pre)=>
        {
          return  pre+1
        })
     }
    }

    return(

        <div>
            <h1>Previous State :{count}</h1>
            <button onClick={Updatevalue}>Update Value</button>

        </div>
    )
}
export default State1;