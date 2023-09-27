import React from 'react'

class ShouldComponentUpdate extends React.Component {

    //define state
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate",this.state.count);
        // if(this.state.count>4 && this.state.count<10){
        return true;
        // }
    }
    render(){
  return (
    <div style={{background:"pink"}}>
        
        <h1>ShouldComponentUpdate:===={this.state.count}</h1>
        <button style={{marginLeft:"30%"}}   onClick={()=>this.setState({count:this.state.count+1})}>Update</button>


    </div>
  )
    }
}

export default ShouldComponentUpdate