import React, { useEffect, useState } from 'react'
import UseEffectProps1 from './UseEffectProps1';

function UseEffectProps(){

    const [Data,SetData]=useState(10);
    const[Count,SetCount]=useState(100);

   
    return(

        <div>

            <h1>Use Effect Proops</h1>
            <UseEffectProps1 Count={Count} Data={Data}/>
            <button  onClick={()=>SetData(Data+1)}>Updata Data</button>
            <button onClick={()=>SetCount(Count+1)}>Update Count</button>
        </div>
    )
}

export default UseEffectProps;