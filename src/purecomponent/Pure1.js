import React, { PureComponent } from "react";
import Pure2 from "./Pure2";

class Pure extends React.Component{
//pure component is same data value not repeated execute this is rendering not same function
//component value excuted only once time execcute same name

constructor (){
    super();
    this.state={
        count:1
    }
}


    render(){


        return(

          <>
          <header className="App-header">
          <h1>This is a Pure Components:</h1>
          <Pure2  count={this.state.count}/>

          <button onClick={()=>this.setState({count:this.state.count+1})}>Update Data</button>
         <button onClick={()=>this.setState({count:1})}>Update</button>

            
             </header>
          
          
          </>

        )
    }



}

export default Pure;