import React from 'react';
import PropTypes from 'prop-types';
import styles from './LifeCycleUpdate.module.css';

class LifeCycleUpdate extends React.Component{

  

  //create constructor
  constructor(){
    super();
    console.log("this constructor");
    this.state={
      name:"neha"
    }
  }
  componentDidUpdate(preprops,preState,Snapshot){
    console.log("this is Component did update state",preState.name,this.state.name);
    if(preState.name===this.state.name){
      alert("both are same name")
    }else{
      alert("both are not same")

      
    }
    console.log("this is component did update props",preprops);

  }
 
  render(){
    console.log("this render");

    return(
  <div>
    <header className='App-header'>
  <h1>Component Did Update :={this.state.name}</h1>
  <button onClick={()=>this.setState({name:"Harish"})}>click Update</button>
  <p>{this.props.name}</p>
  <button onClick={this.props.name}>update props</button>
  
  </header> 
  </div>

    )
  }
}

export default LifeCycleUpdate;
