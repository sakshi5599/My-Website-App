import React from "react";

class controexam extends React.Component{

constructor(){
    super();
    this.state={
        value:"saskhi"
    }
}
    render(){
        return(

            <div>
                <h1>controlled example 1</h1>
                <input type="text" val={this.state.value}></input>
            </div>
        )
    }

}
export default controexam;